import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";

const WhereAmI = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      await Location.watchPositionAsync(
        { accuracy: Location.Accuracy.Highest },
        (loc) => {
          setLocation(loc);
          setSuccess(true);
        }
      );
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  return (
    <View>
      <Text>{text}</Text>
      {success && (
        <MapView
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
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
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title={"SBU"}
            description={"your location"}
          />
        </MapView>
      )}
    </View>
  );
};
export default WhereAmI;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
