import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/authSlice";

const Logout = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleLogout = () => {
    dispatch<any>(logout());
    navigation.navigate("LoginScreen" as never);
  };
  return (
    <View
      style={{
        backgroundColor: "#5a6186",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: -20,
      }}
    >
      <View style={{ alignItems: "center", gap: 20 }}>
        <Text style={{ color: "#fff", fontWeight: "800", fontSize: 20 }}>
          Confirm Logout
        </Text>

        <TouchableOpacity
          style={{ padding: 10, backgroundColor: "red", borderRadius: 10 }}
          onPress={handleLogout}
        >
          <Text style={{ color: "#fff", fontWeight: "500", fontSize: 15 }}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Logout;
