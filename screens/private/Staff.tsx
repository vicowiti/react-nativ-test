import { View, Text } from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Staff = () => {
  const id = AsyncStorage.getItem("userId");
  console.log("id", id);

  return (
    <View>
      <Text>Staff</Text>
      <Text></Text>
    </View>
  );
};

export default Staff;
