import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5 } from "@expo/vector-icons";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { loginUser } from "../redux/slices/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Spinner from "../components/Spinner";
import { storeData } from "../utils/storage/AsyncItems";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

const LoginScreen = () => {
  const dispatch = useDispatch();
  const { isError, isLoading, user } = useSelector(
    (state: RootState) => state.user
  );
  const navigate = useNavigation();
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
        <Image
          source={require("../assets/zamaralogo.png")}
          style={{
            width: 250,
            height: 100,
            resizeMode: "contain",
            marginTop: -40,
            marginBottom: 20,
          }}
        />
      </View>
      <View
        style={{
          width: 100,
          height: 100,
          borderColor: "green",
          borderWidth: 5,
          borderRadius: 50,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <FontAwesome5 name="key" size={60} color="#43AE37" />
      </View>
      <View style={{ width: "70%" }}>
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          onSubmit={async (values) => {
            await dispatch<any>(
              loginUser({
                username: values.username,
                password: values.password,
              })
            );
            if (user) {
              console.log(user.id);

              try {
                navigate.navigate("MyDrawer" as never);
              } catch (error) {
                console.log("Something went wrong");
              }
            }
          }}
          validationSchema={validationSchema}
        >
          {(formik) => (
            <View>
              <View>
                <TextInput
                  style={{
                    backgroundColor: "#3a406c",
                    marginVertical: 10,
                    padding: 10,
                    borderRadius: 5,
                    color: "#9ca3af",
                  }}
                  onChangeText={formik.handleChange("username")}
                  onBlur={formik.handleBlur("username")}
                  value={formik.values.username}
                  placeholder="Username"
                  placeholderTextColor="#9ca3af"
                />
                {formik.touched.username && formik.errors.username && (
                  <Text style={{ fontSize: 12, color: "#FF0D10" }}>
                    {formik.errors.username}
                  </Text>
                )}
              </View>
              <View>
                <TextInput
                  placeholderTextColor="#9ca3af"
                  style={{
                    backgroundColor: "#3a406c",
                    marginBottom: 10,
                    padding: 10,
                    borderRadius: 5,
                    color: "#9ca3af",
                  }}
                  onChangeText={formik.handleChange("password")}
                  onBlur={formik.handleBlur("password")}
                  value={formik.values.password}
                  placeholder="Password"
                  autoCorrect={false}
                  secureTextEntry={true}
                />
                {formik.touched.password && formik.errors.password && (
                  <Text style={{ fontSize: 12, color: "#FF0D10" }}>
                    {formik.errors.password}
                  </Text>
                )}
              </View>
              <TouchableOpacity
                disabled={!formik.isValid}
                onPress={() => formik.handleSubmit()}
                style={{
                  marginTop: 5,
                  padding: 8,
                  backgroundColor: "#43AE37",
                  borderRadius: 5,
                }}
              >
                <Text
                  style={{
                    color: "#FFF",
                    textAlign: "center",
                    fontWeight: "800",
                  }}
                >
                  LOGIN
                </Text>
              </TouchableOpacity>
              <View style={{ marginTop: 5 }}>{isLoading && <Spinner />}</View>
              {isError && (
                <Text style={{ color: "red", textAlign: "center" }}>
                  Something went wrong
                </Text>
              )}
            </View>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
