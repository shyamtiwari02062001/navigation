import { useNavigation } from "@react-navigation/native";
import * as ScreenOrientation from "expo-screen-orientation";
import { useEffect, useState } from "react";
import { View, TextInput, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import PathMarker from "../constants/pathMarker";
import academicBuilding from "../functions/acdemicBuilding";
import administrativeBuilding from "../functions/administrativeBuilding";
import adminsitrativeGround from "../functions/administrativeGround";
import auditorium from "../functions/auditorium";
import basketBall from "../functions/basketball";
import canteen from "../functions/canteen";
import dieMensa from "../functions/dieMensa";
import gate1 from "../functions/gate1";
import gate4 from "../functions/gate4";
import gate5 from "../functions/gate5";
import gate7 from "../functions/gate7";
import hostel from "../functions/hostel";
import ic from "../functions/ic";
import mess from "../functions/mess";
import newParking from "../functions/newParking";
import nursing from "../functions/nursing";
import oldParking from "../functions/oldParking";
import playground from "../functions/playground";
import pond from "../functions/pond";
import residence from "../functions/residence";
import sbpsPlayground from "../functions/sbpsPlayground";
import workshop from "../functions/workshop";
import yoga from "../functions/yoga";
const Path = ({ route }) => {
  const routingData = route.params;
  const navigation = useNavigation();
  const [orientation, setOrientation] = useState(null);
  const [paths, setPaths] = useState([]);
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
  useEffect(() => {
    if (routingData.starting !== "" && routingData.ending !== "") {
      if (routingData.starting === "ACADEMIC BUILDING") {
        setPaths(academicBuilding(routingData.ending));
      } else if (routingData.starting === "ADMINISTRATIVE BUILDING") {
        setPaths(administrativeBuilding(routingData.ending));
      } else if (routingData.starting === "ADMINISTRATIVE GROUND") {
        setPaths(adminsitrativeGround(routingData.ending));
      } else if (routingData.starting === "AUDITORIUM") {
        setPaths(auditorium(routingData.ending));
      } else if (routingData.starting === "BASKETBALL COURT") {
        setPaths(basketBall(routingData.ending));
      } else if (routingData.starting === "DIE MENSA") {
        setPaths(dieMensa(routingData.ending));
      } else if (routingData.starting === "GATE NO 1") {
        setPaths(gate1(routingData.ending));
      } else if (routingData.starting === "GATE NO 4") {
        setPaths(gate4(routingData.ending));
      } else if (routingData.starting === "GATE NO 5") {
        setPaths(gate5(routingData.ending));
      } else if (routingData.starting === "GATE NO 7") {
        setPaths(gate7(routingData.ending));
      } else if (routingData.starting === "GIRLS HOSTEL") {
        setPaths(hostel(routingData.ending));
      } else if (routingData.starting === "IC") {
        setPaths(ic(routingData.ending));
      } else if (routingData.starting === "MESS") {
        setPaths(mess(routingData.ending));
      } else if (routingData.starting === "NEW CANTEEN") {
        setPaths(canteen(routingData.ending));
      } else if (routingData.starting === "NEW PARKING") {
        setPaths(newParking(routingData.ending));
      } else if (routingData.starting === "NURSING BLOCK") {
        setPaths(nursing(routingData.ending));
      } else if (routingData.starting === "OLD PARKING") {
        setPaths(oldParking(routingData.ending));
      } else if (routingData.starting === "PLAYGROUND") {
        setPaths(playground(routingData.ending));
      } else if (routingData.starting === "POND") {
        setPaths(pond(routingData.ending));
      } else if (routingData.starting === "SBPS PLAYGROUND") {
        setPaths(sbpsPlayground(routingData.ending));
      } else if (routingData.starting === "VC SIR RESIDENCE") {
        setPaths(residence(routingData.ending));
      } else if (routingData.starting === "WORKSHOP") {
        setPaths(workshop(routingData.ending));
      } else if (routingData.starting === "YOGA & NATUROPATHY") {
        setPaths(yoga(routingData.ending));
      }
    }
  }, [routingData.starting, routingData.ending]);
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
        <Polyline strokeColor="#4B0082" coordinates={paths} strokeWidth={6} />
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
