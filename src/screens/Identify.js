import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Modal,
  Alert,
} from "react-native";
import Header from "../components/Header";
import CustomButton from "../components/Button";
import CustomInput from "../components/CustomInput";
import Lives from "../components/Lives";
import Sound from "react-native-sound";
import { birdsData } from "../model/BirdsData";
import PopUp from "../components/PopUp";
import AsyncStorage from "@react-native-async-storage/async-storage";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Identify = ({ navigation }) => {
  const [input, setInput] = React.useState("");
  const [screen, setScreen] = React.useState(1);
  const [score, setScore] = React.useState(0);
  const [object, setObject] = React.useState("");
  const [modalVisible, setModalVisible] = React.useState(false);
  const sound = new Sound(object ? object.sound : "eagle.mp3");

  React.useEffect(() => {
    birdsData.map((item) => {
      if (item.id === screen) {
        setObject(item);
      }
    });
  }, [screen]);

  console.log(object, score);
  const incScore = () => {
    if (input !== "" && input.toLowerCase() === object.name) {
      setScore(score + 1);
    } else {
      setModalVisible(true);
    }
  };

  const handlePress = async () => {
    if (!input) {
      Alert.alert("Warning!", "Please enter the name of the bird");
    } else {
      incScore();
      if (screen === 4) {
        await AsyncStorage.setItem("score", JSON.stringify(score)).then(() => {
          navigation.navigate("GameOver");
          setScore(0);
          setScreen(1);
        });
      } else {
        setScreen(screen + 1);
      }
    }
    setInput("");
  };

  return (
    <ImageBackground
      source={require("../assets/Background.png")}
      style={styles.container}>
      <Header color={"#E4680B"} navigation={navigation} />

      <ScrollView>
        <Text style={styles.text}>Birds</Text>

        <CustomButton text={`Score:  ${score}`} />

        <Text style={styles.question}>
          Q. Identify the Bird and Write it’s spellings.
        </Text>
        {/* sound.play() */}
        <TouchableOpacity
          style={styles.hint}
          onPress={() => {
            sound.play();
            console.log("Hello");
          }}>
          <Image
            source={require("../assets/icons/speaker.png")}
            style={styles.image}
          />
          <Text style={styles.hintText}>Hint</Text>
        </TouchableOpacity>

        <Image
          source={object ? object.image : require("../assets/Eagle.png")}
          resizeMode="contain"
          style={styles.birdImage}
        />

        <CustomButton text={<Lives />} />

        <CustomInput
          value={input}
          onChangeText={setInput}
          placeholder={"Name"}
        />

        <View style={styles.submit}>
          <CustomButton
            text={screen === 4 ? "Submit" : "Next"}
            paddingHorizontal={windowWidth * 0.3}
            onPress={handlePress}
          />
        </View>
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <PopUp
            illustration={3}
            message={"Wrong Answer"}
            sub={"Wrong Answer! You lost a Life. Try Again."}
            navigation={navigation}
            onPress={() => setModalVisible(false)}
          />
        </Modal>
      </ScrollView>
    </ImageBackground>
  );
};

export default Identify;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255, 194, 37, 0.15)",
  },
  text: {
    fontFamily: "Poppins-Medium",
    color: "#E4680B",
    fontSize: 36,
    alignSelf: "center",
  },
  question: {
    color: "#E4680B",
    fontSize: windowWidth * 0.045,
    marginHorizontal: windowWidth * 0.06,
    textAlign: "justify",
    marginTop: windowHeight * 0.02,
    fontFamily: "Poppins-Regular",
  },
  hint: {
    flexDirection: "row",
    marginHorizontal: windowWidth * 0.06,
    alignItems: "center",
    alignSelf: "flex-end",
  },
  image: {
    width: windowWidth * 0.06,
    height: windowHeight * 0.028,
  },
  hintText: {
    color: "#E4680B",
    fontSize: windowWidth * 0.05,
    marginLeft: windowWidth * 0.02,
    fontFamily: "Poppins-Regular",
  },
  birdImage: {
    height: windowHeight * 0.33,
    width: windowWidth * 0.78,
    alignSelf: "center",
    marginVertical: windowHeight * 0.005,
  },
  submit: {
    marginTop: windowHeight * 0.07,
    marginBottom: windowHeight * 0.03,
  },
});
