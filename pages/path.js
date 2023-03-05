import { useNavigation } from "@react-navigation/native";
import * as ScreenOrientation from "expo-screen-orientation";
import { useEffect, useState } from "react";
import { View, TextInput, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import pinPoints from "../constants/pinpoints";
const Path = () => {
  const navigation = useNavigation();
  const [orientation, setOrientation] = useState(null);
  useEffect(() => {
    checkOrientation();
    const subscription = ScreenOrientation.addOrientationChangeListener(
      handleOrientationChange
    );
    return () => {
      ScreenOrientation.removeOrientationChangeListeners(subscription);
    };
  }, []);
  const checkOrientation = async () => {
    const orientation = await ScreenOrientation.getOrientationAsync();
    setOrientation(orientation);
  };
  const handleOrientationChange = (o) => {
    setOrientation(o.orientationInfo.orientation);
  };
  return (
    <View>
      <View
        style={{
          flexDirection:
            orientation === 1 || orientation === 2 ? "column" : "row",
          height:
            orientation === 1 || orientation === 2
              ? Dimensions.get("window").height * 0.2
              : Dimensions.get("window").height * 0.15,
          ...styles.inputContainer,
        }}
      >
        <TextInput
          onFocus={() => navigation.navigate("takePath")}
          style={{
            width: orientation === 1 || orientation === 2 ? "90%" : "45%",
            padding: Dimensions.get("window").height * 0.015,
            ...styles.input,
          }}
        />
        <TextInput
          onFocus={() => navigation.navigate("takePath")}
          style={{
            width: orientation === 1 || orientation === 2 ? "90%" : "45%",
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
          height:
            orientation === 1 || orientation === 2
              ? Dimensions.get("window").height * 0.8
              : Dimensions.get("window").height * 0.85,
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
export default Path;
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
    fontSize: 25,
    color: "#4B0082",
  },
  inputContainer: {
    backgroundColor: "#9e7bb5",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
