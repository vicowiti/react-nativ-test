import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Staff from "./private/Staff";
import CreateStaff from "./private/staff/CreateStaff";
import EditStaff from "./private/staff/EditStaff";
import { AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const StaffTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName = "md-list-outline";

          if (route.name === "Staff") {
            iconName = "bars";
          } else if (route.name === "CreateStaff") {
            iconName = "adduser";
          } else if (route.name === "EditStaff") {
            iconName = "edit";
          }

          return <AntDesign name={iconName as any} size={size} color={color} />;
        },
        tabBarLabelStyle: {
          display: "none",
        },
      })}
    >
      <Tab.Screen name="Staff" component={Staff} />
      <Tab.Screen name="CreateStaff" component={CreateStaff} />
      <Tab.Screen name="EditStaff" component={EditStaff} />
    </Tab.Navigator>
  );
};

export default StaffTab;
