import React from "react";
import {
  ImageBackground,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import CustomInput from "../components/CustomInput";
import ContinueWith from "../components/ContinueWith";
import GoogleButton from "../components/GoogleButton";
import SmallButton from "../components/SmallButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";

export default function Signin({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [user, setUser] = React.useState("");

  const Login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // console.log("erer");
        // const user = userCredential.user;
        // console.log(userCredential)
        // navigation.navigate("ChildN");
        if (user === "Child") {
          navigation.replace("ChildN", { screen: "Home" });
        } else {
          navigation.replace("Parent", { screeen: "Drawer" });
        }
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // console.log(errorMessage);
        // Alert.alert(errorMessage);
        Alert.alert("Please enter Right Credentials");
      });
  };

  React.useEffect(() => {
    const getUser = async () => {
      try {
        const user = await AsyncStorage.getItem("user");
        if (user) {
          setUser(user);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  }, [navigation]);

  const handlePress = () => {
    if (email === "") {
      return Alert.alert("Please enter email");
    } else if (password === "") {
      return Alert.alert("Please enter Password");
    } else if (user === "Child") {
      navigation.replace("ChildN", { screen: "Home" });
    } else {
      navigation.replace("Parent", { screeen: "Drawer" });
    }
  };

  return (
    <ImageBackground source={require("../assets/bg.png")} style={{ flex: 1 }}>
      <TouchableOpacity
        style={styles.nav}
        onPress={() =>
          navigation.navigate("MainNavigation", { screen: "Welcome" })
        }>
        <Image
          style={styles.Icon}
          source={require("../assets/icons/back.png")}
        />
      </TouchableOpacity>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <Text style={styles.welcome}>Welcome!</Text>

      <CustomInput
        value={email}
        onChangeText={setEmail}
        placeholder={"Email"}
        option={4}
      />
      <CustomInput
        value={password}
        onChangeText={setPassword}
        placeholder={"Password"}
        option={2}
        secureTextEntry
      />
      <TouchableOpacity style={styles.container}>
        <Text style={styles.label}>Forgot Password?</Text>
      </TouchableOpacity>

      <SmallButton text={"Sign in"} onpress={() => Login()} />
      <ContinueWith />
      <GoogleButton text={"Sign in with Google"} />
      {user === "Child" ? null : (
        <Text style={styles.label2}>
          Don't Have an account?
          <Text
            onPress={() =>
              navigation.navigate("MainNavigation", { screen: "Signup" })
            }
            style={styles.signup}>
            Sign up
          </Text>{" "}
          now
        </Text>
      )}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    height: 40,
    marginTop: 20,
  },
  Icon: {
    marginLeft: 25,
  },
  logo: {
    marginTop: 40,
    alignSelf: "center",
    height: 110,
    width: 180,
  },
  welcome: {
    fontSize: 32,
    fontWeight: "500",
    color: "#E4680B",
    textAlign: "center",
    marginBottom: 20,
    marginTop: 10,
  },

  container: {
    flexDirection: "row-reverse",
    width: "90%",
  },
  label: {
    color: "#E4680B",
    fontWeight: "500",
  },
  label2: {
    color: "#E4680B",
    fontWeight: "500",
    marginTop: 5,
    alignSelf: "center",
    fontSize: 16,
  },

  signup: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
