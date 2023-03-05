import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
const ListItem = ({ data,res }) => {
  const navigation=useNavigation()
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('FIND PATH')}
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
