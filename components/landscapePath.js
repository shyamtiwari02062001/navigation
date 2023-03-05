import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import pinPoints from "../constants/pinpoints";
const LandscapePath = () => {
  return (
    <View>
      <View
        style={{
          height: Dimensions.get("window").height * 0.15,
          ...styles.inputContainer,
        }}
      >
        <TextInput
          style={{
            padding: Dimensions.get("window").height * 0.015,
            ...styles.input,
          }}
        />
        <TextInput
          style={{
            padding: Dimensions.get("window").height * 0.015,
            ...styles.input,
          }}
        />
      </View>
      <MapView
        initialRegion={{
          latitude: 23.3474,
          longitude: 85.417,
          latitudeDelta: 0.002,
          longitudeDelta: 0.002,
        }}
        mapType="satellite"
        style={{
          height: Dimensions.get("window").height * 0.85,
          ...styles.map,
        }}
      >
        {pinPoints.map((item, i) => (
          <Marker
            pinColor="#9e7bb5"
            key={i}
            coordinate={{
              latitude: item.latitude,
              longitude: item.longitude,
            }}
            title={"SBU"}
            description={item.description}
          />
        ))}
      </MapView>
    </View>
  );
};
export default LandscapePath;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
  },
  input: {
    borderRadius: 20,
    borderWidth: 4,
    borderColor: "#4B0082",
    width: "45%",
    fontSize: 25,
    color: "#4B0082",
  },
  inputContainer: {
    flexDirection: "row",
    backgroundColor: "#9e7bb5",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
