import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, BackHandler, Dimensions, Image } from "react-native";
import {
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import locations from "../constants/locations";
import ListItem from "./listItem";
const PlaceInput = ({ route }) => {
  const routingData = route.params;

  const navigation = useNavigation();
  const [data, setData] = useState(locations);
  const [searchText, changeSearchText] = useState("");
  useEffect(() => {
    const backAction = () => {
      navigation.navigate("FIND PATH", {
        starting: routingData.startingPosition,
        ending: routingData.endingPosition,
      });
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => backHandler.remove();
  }, []);
  useEffect(() => {
    const filtered = locations.filter((item) =>
      item.toLowerCase().includes(searchText.toLowerCase())
    );
    if (searchText === "") {
      return setData(locations);
    }

    setData(filtered);
  }, [searchText]);
  return (
    <View style={{ flex: 1, backgroundColor: "#9e7bb5" }}>
      <View
        style={{
          flexDirection: "row",
          marginTop: Dimensions.get("window").width * 0.1,
          marginBottom: Dimensions.get("window").width * 0.05,
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("FIND PATH", {
              starting: routingData.startingPosition,
              ending: routingData.endingPosition,
            })
          }
        >
          <Image
            style={{
              tintColor: "#4B0082",
              width: 60,
              height: 60,
            }}
            source={require("../assets/back.png")}
          />
        </TouchableOpacity>
        <TextInput
        value={searchText}
          onChangeText={(val) => changeSearchText(val)}
          style={{
            width: "80%",
            padding: Dimensions.get("window").height * 0.015,
            fontWeight: "bold",
            borderRadius: 20,
            borderWidth: 4,
            borderColor: "#4B0082",
            fontSize: 25,
            color: "#4B0082",
          }}
        />
      </View>
      <FlatList
        data={data}
        renderItem={({ item, i }) => (
          <ListItem data={item} routingData={routingData} />
        )}
      />
    </View>
  );
};
export default PlaceInput;
