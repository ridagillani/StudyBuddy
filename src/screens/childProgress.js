import React from "react";
import OrangeCards from "../components/OrangeCard";
import {
  ImageBackground,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  Pressable,
  ScrollView,
} from "react-native";
import Days from "../components/Days";

const ChildProgress = () => {
  const [currentDay, setCurrentDay] = React.useState(1);
  console;
  return (
    <View>
      <ImageBackground
        source={require("../assets/backgroundEl.png")}
        resizeMode="cover"
        style={styles.background}
      >
        <TouchableOpacity
          style={{
            height: "5%",
            paddingTop: 15,
            paddingLeft: 15,
          }}
        >
          <Image
            style={{ width: 60, height: 60 }}
            source={require("../assets/menu.png")}
          />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginLeft: 25,
            marginBottom: 45,
          }}
        >
          <Text style={styles.heading}>Progress{"\n"}Record</Text>
          <Image
            style={{ height: 220, width: 200 }}
            source={require("../assets/illlustrationcp.png")}
          />
        </View>
        <ScrollView>
          <Text style={styles.texts}>Report</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              marginRight: 35,
            }}
          >
            <Days
              onPress={() => setCurrentDay(1)}
              day={"1d"}
              currentDay={currentDay === 1 ? true : false}
            />
            <Days
              onPress={() => setCurrentDay(2)}
              day={"7d"}
              currentDay={currentDay === 2 ? true : false}
            />
            <Days
              onPress={() => setCurrentDay(3)}
              day={"30d"}
              currentDay={currentDay === 3 ? true : false}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              // height: '15%',
              marginVertical: 15,
              marginHorizontal: 25,
            }}
          >
            <OrangeCards score={15} />
            <OrangeCards score={15} />
            <OrangeCards score={15} />
          </View>

          <Text style={styles.texts}>Record</Text>
          <View
            style={{
              backgroundColor: "#FFF1CD",
              borderRadius: 20,
              marginHorizontal: 15,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginHorizontal: 25,
              }}
            >
              <Text style={{ color: "#E4680B", fontSize: 20, padding: 10 }}>
                Attempt 1
              </Text>
              <Pressable
                style={{
                  backgroundColor: "#E4680B",
                  width: 70,
                  height: 25,
                  borderRadius: 20,
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: "#FFEEC2",
                    fontSize: 10,
                    textAlign: "center",
                  }}
                >
                  MCQ's
                </Text>
              </Pressable>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 15,
                marginHorizontal: 20,
              }}
            >
              <OrangeCards score={15} />
              <OrangeCards score={15} />
              <OrangeCards score={15} />
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default ChildProgress;

const styles = StyleSheet.create({
  background: {
    height: "100%",
    width: "100%",
  },
  heading: {
    color: "white",
    fontSize: 40,
    fontFamily: "Comfortaa-Bold",
  },
  texts: {
    color: "#E4680B",
    fontSize: 30,
    fontWeight: "500",
    marginLeft: 20,
    fontFamily: "Poppins-Medium",
  },
  daysB: {
    height: 35,
    width: 35,
    backgroundColor: "#FFEEC2",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  sameB: {
    color: "#E4680B",
    fontSize: 15,
  },
  B: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 15,
    color: "#E4680B",
  },
  orangeCards: {
    backgroundColor: "#E4680B",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    // height: 110,
    width: 100,
    paddingVertical: 10,
  },
});