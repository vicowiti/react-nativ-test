import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import EditModal from "./modals/editModal";
import DeleteModal from "./modals/deleteModal";

interface EditStaffProps {
  route: any;
  navigation: any;
}

const EditStaff = ({ route, navigation }: EditStaffProps) => {
  const userData = route.params;

  return (
    <View>
      <Text
        style={{
          textAlign: "center",
          fontWeight: "800",
          fontSize: 25,
          marginTop: 15,
        }}
      >
        Staff Profile
      </Text>
      {/* Staff Logo */}

      <View style={{ marginHorizontal: 25, gap: 10, marginTop: 20 }}>
        <Text>
          Name: <Text style={{ fontWeight: "600" }}>{userData.staffName}</Text>
        </Text>
        <Text>
          Email:{" "}
          <Text style={{ fontWeight: "600" }}>{userData.staffEmail}</Text>
        </Text>
        <Text>
          Staff No:{" "}
          <Text style={{ fontWeight: "600" }}>{userData.staffNumber}</Text>
        </Text>
        <Text>
          Salary: <Text style={{ fontWeight: "600" }}>{userData.salary}</Text>
        </Text>
        <Text>
          Department:{" "}
          <Text style={{ fontWeight: "600" }}>{userData.department}</Text>
        </Text>
      </View>

      {/* Actions button */}
      <View
        style={{
          height: 100,
          marginHorizontal: 30,

          gap: 10,
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <EditModal {...userData} />

        <DeleteModal {...userData} />
      </View>
    </View>
  );
};

export default EditStaff;
