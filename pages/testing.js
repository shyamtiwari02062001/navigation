import "react-native-gesture-handler";
import React from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
export default function Testing() {
  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: 23.34834,
          longitude: 85.415,
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
            latitude: 23.34854,
            longitude: 85.4147,
          }}
          title={"SBU"}
          description={"description"}
        />
        <Marker
          pinColor="#9e7bb5"
          key={1}
          coordinate={{
            latitude: 23.34862,
            longitude: 85.4142,
          }}
          title={"SBU"}
          description={"description"}
        />
        <Polyline
          coordinates={[
            { latitude: 23.35342, longitude: 85.41325 },
            { latitude: 23.35397, longitude: 85.41335 },
            { latitude: 23.35398, longitude: 85.41332 },
            { latitude: 23.3544, longitude: 85.41326 },
            { latitude: 23.35443, longitude: 85.4131 },
            { latitude: 23.35443, longitude: 85.41305 },
            { latitude: 23.353, longitude: 85.41302 },
            { latitude: 23.3503, longitude: 85.413 },
            { latitude: 23.3501, longitude: 85.4131 },
            { latitude: 23.3501, longitude: 85.4132 },
            { latitude: 23.35015, longitude: 85.41429 },
            { latitude: 23.34885, longitude: 85.41419 },

            { latitude: 23.34862, longitude: 85.41422 },
            { latitude: 23.34854, longitude: 85.4147 },
            { latitude: 23.3485, longitude: 85.4147 },
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
