import {
  View,
  Text,
  ScrollView,
  Image,
  ImageSourcePropType,
} from "react-native";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { getFullUser } from "../../redux/slices/userSlice";
import ViewItem from "../../components/ViewItem";
import { Foundation } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Home = () => {
  const dispatch = useDispatch();
  const { isError, isLoading, user } = useSelector(
    (state: RootState) => state.user
  );

  const { error, loading, userFull } = useSelector(
    (state: RootState) => state.fullUser
  );

  useEffect(() => {
    if (user) {
      dispatch<any>(getFullUser(user?.id));
      console.log(userFull);
    }
  }, [dispatch]);

  let Image_Http_URL = {
    uri: userFull?.image,
  };

  return (
    <ScrollView style={{ backgroundColor: "#5a6186" }}>
      <View style={{ minHeight: "100%" }}>
        {/* welcome View */}
        <View
          style={{
            height: 140,
            backgroundColor: "#323761",
            marginVertical: 5,
            marginHorizontal: 5,
            borderRadius: 10,
            padding: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text style={{ color: "#FFF", fontWeight: "800", fontSize: 30 }}>
              WELCOME
            </Text>
            <Text
              style={{
                color: "#9CA3AF",
                fontWeight: "800",
                fontSize: 20,
                marginTop: 10,
              }}
            >
              {userFull?.firstName} {userFull?.lastName}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#5a6186",
              padding: 7,
              height: 80,
              width: 80,
              borderRadius: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image source={Image_Http_URL} style={{ width: 50, height: 50 }} />
          </View>
        </View>
        {/* Biodata view */}
        <View
          style={{
            minHeight: 140,
            backgroundColor: "#323761",
            marginVertical: 5,
            marginHorizontal: 5,
            borderRadius: 10,
            padding: 10,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 25,
              color: "#fff",
              fontWeight: "700",
            }}
          >
            BioData
          </Text>
          <View style={{ padding: 20 }}>
            <ViewItem
              label="Age"
              data={userFull?.age}
              icon={<Foundation name="list-number" size={24} color="#fff" />}
            />
            <ViewItem
              label="Gender"
              data={userFull?.gender}
              icon={
                <MaterialCommunityIcons
                  name="gender-male-female"
                  size={24}
                  color="#fff"
                />
              }
            />
            <ViewItem
              label="Email"
              data={userFull?.email}
              icon={
                <MaterialCommunityIcons
                  name="email-box"
                  size={24}
                  color="#fff"
                />
              }
            />
            <ViewItem
              label="Phone"
              data={userFull?.phone}
              icon={<Entypo name="phone" size={24} color="#fff" />}
            />
            <ViewItem
              label="Birth Date"
              data={userFull?.birthDate}
              icon={<Entypo name="calendar" size={24} color="#fff" />}
            />

            <ViewItem
              label="Blood Group"
              data={userFull?.bloodGroup}
              icon={<Fontisto name="blood-drop" size={24} color="#fff" />}
            />
            <ViewItem
              label="Height"
              data={userFull?.height}
              icon={<MaterialIcons name="height" size={24} color="#fff" />}
            />
            <ViewItem
              label="Weight"
              data={userFull?.weight}
              icon={
                <MaterialCommunityIcons
                  name="weight-kilogram"
                  size={24}
                  color="#fff"
                />
              }
            />
            <ViewItem
              label="Eye Color"
              data={userFull?.eyeColor}
              icon={
                <MaterialIcons name="remove-red-eye" size={24} color="#fff" />
              }
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
