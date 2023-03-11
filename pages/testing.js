import "react-native-gesture-handler";
import React from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
export default function Testing() {
  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: 23.3503,
          longitude: 85.4142,
          latitudeDelta: 0.002,
          longitudeDelta: 0.002,
        }}
        mapType="satellite"
        style={styles.map}
      >
        <Marker
          pinColor="#9e7bb5"
          key={0}
          coordinate={{
            latitude: 23.3501,
            longitude: 85.4132,
          }}
          title={"SBU"}
          description={"description"}
        />
        <Marker
          pinColor="#9e7bb5"
          key={1}
          coordinate={{ latitude: 23.34885, longitude: 85.41419 }}
          title={"SBU"}
          description={"description"}
        />
        <Polyline
          coordinates={[
            { latitude: 23.34863, longitude: 85.41394 },
            { latitude: 23.34867, longitude: 85.4139 },
            { latitude: 23.34872, longitude: 85.41387 },
          ]}
          strokeColor="red" // fallback for when `strokeColors` is not supported by the map-provider
          strokeColors={[
            "#7F0000",
            "#00000000", // no color, creates a "long" gradient between the previous and next coordinate
            "#B24112",
            "#E5845C",
            "#238C23",
            "#7F0000",
          ]}
          strokeWidth={6}
        />
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
