import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import SettingsScreen from "./setting";
import HomeScreen from "./home";
import Dashboard from "./pages/dashboard";
import { Image, TouchableOpacity } from "react-native";
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={({ navigation }) => ({
          drawerContentContainerStyle: {
            backgroundColor: "#4B0082",
            height: "100%",
            overflow: "hidden",
          },

          drawerInactiveTintColor: "#9e7bb5",
          drawerActiveTintColor: "#9e7bb5",
          drawerLabelStyle: {
            fontSize: 25,
            fontWeight: "bold",
            height: 30,
            textAlignVertical: "center",
          },
          headerTintColor: "#9e7bb5",
          headerTitleStyle: {
            fontSize: 30,
            fontWeight: "bold",
          },
          headerLeft: () => (
            <TouchableOpacity onPress={navigation.toggleDrawer}>
              <Image
                style={{ tintColor: "#9e7bb5", width: 60, height: 60 }}
                source={require("./assets/menu.png")}
              />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: "#4B0082",
            height: 110,
            elevation: 50,
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
