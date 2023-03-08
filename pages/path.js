import { useNavigation } from "@react-navigation/native";
import * as ScreenOrientation from "expo-screen-orientation";
import { useEffect, useState } from "react";
import { View, TextInput, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import PathMarker from "../constants/pathMarker";
const Path = ({ route }) => {
  const routingData = route.params;
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
          value={routingData.starting}
          onFocus={() =>
            navigation.navigate("takePath", {
              starting: true,
              ending: false,
              startingPosition: routingData.starting,
              endingPosition: routingData.ending,
            })
          }
          style={{
            width: orientation === 1 || orientation === 2 ? "90%" : "45%",
            padding: Dimensions.get("window").height * 0.015,
            ...styles.input,
          }}
        />
        <TextInput
          value={routingData.ending}
          onFocus={() =>
            navigation.navigate("takePath", {
              starting: false,
              ending: true,
              startingPosition: routingData.starting,
              endingPosition: routingData.ending,
            })
          }
          style={{
            width: orientation === 1 || orientation === 2 ? "90%" : "45%",
            padding: Dimensions.get("window").height * 0.015,
            ...styles.input,
          }}
        />
      </View>
      <MapView
        region={{
          latitude:
            routingData.starting !== ""
              ? PathMarker[routingData.starting].latitude
              : 23.3474,
          longitude:
            routingData.starting !== ""
              ? PathMarker[routingData.starting].longitude
              : 85.417,
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
        {routingData.starting !== "" && (
          <Marker
            pinColor="#00FF00"
            key={0}
            coordinate={{
              latitude: PathMarker[routingData.starting].latitude,
              longitude: PathMarker[routingData.starting].longitude,
            }}
            title={"SBU"}
            description={PathMarker[routingData.starting].description}
          />
        )}
        {routingData.ending !== "" && (
          <Marker
            pinColor="#0000FF"
            key={1}
            coordinate={{
              latitude: PathMarker[routingData.ending].latitude,
              longitude: PathMarker[routingData.ending].longitude,
            }}
            title={"SBU"}
            description={PathMarker[routingData.ending].description}
          />
        )}
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
