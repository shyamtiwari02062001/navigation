import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";
import pinPoints from "../constants/pinpoints";
import distance from "../functions/distance";
import Lottie from "lottie-react-native";

const WhereAmI = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [success, setSuccess] = useState(false);
  const [min, setMin] = useState(100000000);
  const [place, setPlace] = useState("");
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
          for (let i = 0; i < pinPoints.length; i++) {
            value = distance(
              pinPoints[i].latitude,
              pinPoints[i].longitude,
              loc.coords.latitude,
              loc.coords.longitude,
              "K"
            );
            console.log(value);
            if (value < min) {
              setMin(value);
              setPlace(pinPoints[i].description);
            }
          }
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
    <View style={styles.container}>
      {success ? (
        <MapView
          region={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
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
          <Marker
            key={100}
            pinColor="#4B0082"
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
          >
            <View style={styles.marker}>
              <View style={styles.tooltip}>
                <Text style={styles.text}>
                  {`Nearest to ${place} \n About ${
                    Math.round((min + Number.EPSILON) * 100) / 100
                  } `}
                  KM away
                </Text>
              </View>
              <View style={styles.TriangleShapeCSS} />
              <Image
                source={require("../assets/location.png")}
                style={styles.img}
              />
            </View>
          </Marker>
        </MapView>
      ) : (
        <Lottie source={require("../assets/loader.json")} autoPlay loop />
      )}
    </View>
  );
};
export default WhereAmI;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4B0082",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  img: {
    width: 60,
    height: 60,
  },
  tooltip: {
    backgroundColor: "#9e7bb5",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 20,
  },
  TriangleShapeCSS: {
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderTopWidth: 10,
    borderStyle: "solid",
    backgroundColor: "transparent",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: "#9e7bb5",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4B0082",
    textAlign: "center",
  },
  marker: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
