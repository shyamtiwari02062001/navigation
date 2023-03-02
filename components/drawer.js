import React from "react";
import { Image, TouchableOpacity, StyleSheet } from "react-native";
const CustomDrawerIcon = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={navigation.toggleDrawer}>
      <Image style={styles.image} source={require("../assets/menu.png")} />
    </TouchableOpacity>
  );
};
export default CustomDrawerIcon;
const styles = StyleSheet.create({
  image: {
    tintColor: "#9e7bb5",
    width: 60,
    height: 60,
  },
});
