import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";

import * as Location from "expo-location";
import pinPoints from "./constants/pinpoints";

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

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
            key={i}
            coordinate={{
              latitude: item.latitude,
              longitude: item.longitude,
            }}
            title={"SBU"}
            description={item.description}
          />
        ))}
        <Polyline
          coordinates={[
            {
              latitude: 23.35577,
              longitude: 85.41308,
            },
            {
              latitude: 23.35443,
              longitude: 85.41305,
            },
          ]}
          strokeColor="#000"
          strokeColors={["#7F0000"]}
          strokeWidth={10}
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
