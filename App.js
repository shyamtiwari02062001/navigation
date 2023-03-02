import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import SettingsScreen from "./setting";
import Dashboard from "./pages/dashboard";
import { Image, TouchableOpacity, StyleSheet } from "react-native";
import CustomDrawerIcon from "./components/drawer";
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
          headerLeft: () => <CustomDrawerIcon navigation={navigation}/>,
          headerStyle: {
            ...styles.headerStyle,
          },
        })}
        initialRouteName="Home"
      >
        <Drawer.Screen name="SBU TOUR" component={Dashboard} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
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
});
