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
const PlaceInput = () => {
    console.log(locations.sort())
  const navigation = useNavigation();
  const [value, setValue] = useState("");
  useEffect(() => {
    const backAction = () => {
      navigation.navigate("FIND PATH");
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => backHandler.remove();
  }, []);
  const update = (val) => {
    setValue(val);
  };
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
        <TouchableOpacity onPress={() => navigation.navigate("FIND PATH")}>
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
          value={value}
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
        data={locations}
        renderItem={({ item, i }) => <ListItem data={item} />}
      />
    </View>
  );
};
export default PlaceInput;
