import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
const ListItem = ({ data, routingData }) => {
  const navigation = useNavigation();
  const change = () => {
    if (routingData.starting) {
      navigation.navigate("FIND PATH", {
        ending: routingData.endingPosition,
        starting: data,
      });
    }
    else{
      navigation.navigate("FIND PATH", {
        ending: data,
        starting: routingData.startingPosition,
      });
    }
  };
  return (
    <TouchableOpacity
      onPress={() => change()}
      style={{
        backgroundColor: "#4B0082",
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 20,
      }}
    >
      <Text
        style={{
          fontSize: 25,
          padding: 10,
          textAlign: "center",
          fontWeight: "bold",
          color: "#9e7bb5",
        }}
      >
        {data}
      </Text>
    </TouchableOpacity>
  );
};
export default ListItem;
