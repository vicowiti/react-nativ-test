import { View, Text, Pressable } from "react-native";
import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import Home from "./private/Home";
import Staff from "./private/Staff";
import Continents from "./private/Continents";
import Logout from "./private/Logout";
import StaffTab from "./StaffTab";

const Drawer = createDrawerNavigator();

// const CustomDrawerContent = (props: any) => {
//   return (
//     <DrawerContentScrollView {...props} st>
//       <View>
//
//
//       </View>
//     </DrawerContentScrollView>
//   );
// };

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerActiveTintColor: "blue",
        drawerInactiveTintColor: "green",
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: "Zamara App",
          headerStyle: {
            backgroundColor: "#1F1F3d",
          },
          headerTintColor: "#FFF",
        }}
      />
      <Drawer.Screen
        name="StaffTab"
        component={StaffTab}
        options={{
          headerStyle: {
            backgroundColor: "#1F1F3d",
          },
          headerTintColor: "#FFF",
        }}
      />
      <Drawer.Screen
        name="Continents"
        component={Continents}
        options={{
          headerStyle: {
            backgroundColor: "#1F1F3d",
          },
          headerTintColor: "#FFF",
        }}
      />
      <Drawer.Screen
        name="Logout"
        component={Logout}
        options={{
          headerStyle: {
            backgroundColor: "#1F1F3d",
          },
          headerTintColor: "#FFF",
        }}
      />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
