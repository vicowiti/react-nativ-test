import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function InitScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#1f1f3d",
        height: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View>
        <StatusBar style="auto" />
        <Image
          source={require("../assets/zamaralogo.png")}
          style={{ width: 250, height: 100, flex: 1, resizeMode: "contain" }}
        />

        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            padding: 15,
            borderRadius: 10,
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#43ae37",
            marginBottom: 50,
          }}
          onPress={() => navigation.navigate("LoginScreen" as never)}
        >
          <Text style={{ color: "#Fff", fontWeight: "800", fontSize: 18 }}>
            Get Started
          </Text>
          <AntDesign name="right" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
