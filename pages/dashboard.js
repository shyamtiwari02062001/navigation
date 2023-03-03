import "react-native-gesture-handler";
import React from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import pinPoints from "../constants/pinpoints";
export default function Dashboard() {
  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: 23.3474,
          longitude: 85.417,
          latitudeDelta: 0.002,
          longitudeDelta: 0.002,
        }}
        mapType="satellite"
        style={styles.map}
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
