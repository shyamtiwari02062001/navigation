import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Dashboard from "./pages/dashboard";
import { Image, StyleSheet } from "react-native";
import CustomDrawerIcon from "./components/drawer";
import WhereAmI from "./pages/whereAmI";
import Path from "./pages/path";
import PlaceInput from "./components/placeInput";
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={({ navigation }) => ({
          drawerContentContainerStyle: {
            ...styles.drawerContent,
          },
          ...styles.extraColor,
          drawerLabelStyle: {
            ...styles.drawerLabel,
          },
          headerTitleStyle: {
            ...styles.headerTitle,
          },
          headerLeft: () => <CustomDrawerIcon navigation={navigation} />,
          headerStyle: {
            ...styles.headerStyle,
          },
        })}
        initialRouteName="SBU TOUR"
      >
        <Drawer.Screen
          name="SBU TOUR"
          options={{
            drawerIcon: () => (
              <Image source={require("./assets/tour.png")} style={styles.img} />
            ),
          }}
          component={Dashboard}
        />
        <Drawer.Screen
          name="WHERE AM I"
          options={{
            drawerIcon: () => (
              <Image
                source={require("./assets/whereAmI.png")}
                style={styles.img}
              />
            ),
          }}
          component={WhereAmI}
        />
        <Drawer.Screen
          name="FIND PATH"
          options={{
            drawerIcon: () => (
              <Image source={require("./assets/path.png")} style={styles.img} />
            ),
          }}
          component={Path}
        />
        <Drawer.Screen
          options={{ headerShown: false, drawerItemStyle: { height: 0 } }}
          name="takePath"
          component={PlaceInput}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  drawerContent: {
    backgroundColor: "#4B0082",
    height: "100%",
    overflow: "hidden",
  },
  drawerLabel: {
    fontSize: 25,
    fontWeight: "bold",
    height: 30,
    textAlignVertical: "center",
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: "bold",
  },
  headerStyle: {
    backgroundColor: "#4B0082",
    height: 110,
    elevation: 50,
  },
  extraColor: {
    drawerInactiveTintColor: "#9e7bb5",
    drawerActiveTintColor: "#9e7bb5",
    headerTintColor: "#9e7bb5",
  },
  img: {
    height: 40,
    width: 40,
  },
});
