import { View, Text, ScrollView } from "react-native";
import React, { useEffect } from "react";
import EmployeeCard from "../../components/EmployeeView";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { getAllStaff } from "../../redux/staffSlice";
import Spinner from "../../components/Spinner";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Staff = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { staffData, staffError, staffLoading } = useSelector(
    (state: RootState) => state.staff
  );

  useEffect(() => {
    dispatch<any>(getAllStaff());
  }, [dispatch]);

  return (
    <View>
      <View>
        <Text
          style={{
            textAlign: "center",
            marginVertical: 5,
            fontWeight: "600",
            fontSize: 20,
          }}
        >
          Zamara HR
        </Text>

        <View
          style={{
            marginVertical: 15,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
          }}
        >
          <TouchableOpacity
            style={{ padding: 5, backgroundColor: "#43AE37" }}
            onPress={() => navigation.navigate("CreateStaff" as never)}
          >
            <Text style={{ color: "#fff", padding: 5 }}>ADD STAFF</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ padding: 5, backgroundColor: "#1F1F3D" }}>
            <Text style={{ color: "#fff", padding: 5 }}>VIEW STAFF</Text>
          </TouchableOpacity>
        </View>
      </View>
      {staffLoading && <Spinner />}
      {staffData?.map((staff) => (
        <EmployeeCard key={staff._id} {...staff} />
      ))}
      <View></View>
    </View>
  );
};

export default Staff;
