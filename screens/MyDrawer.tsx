import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./private/Home";
import Staff from "./private/Staff";
import Continents from "./private/Continents";
import Logout from "./private/Logout";

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Staff" component={Staff} />
      <Drawer.Screen name="Continents" component={Continents} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
