import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createStaff, getAllStaff } from "../../../redux/staffSlice";
import { useNavigation } from "@react-navigation/native";

const CreateStaff = () => {
  const navigate = useNavigation();
  const dispatch = useDispatch();
  const [staffNumber, setStaffId] = useState("");
  const [staffName, setStaName] = useState("");
  const [staffEmail, setStaffEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState("");

  const handleCreate = async () => {
    if (staffNumber && staffName && staffEmail && department && salary) {
      dispatch<any>(
        createStaff({
          staffNumber,
          staffName,
          staffEmail,
          department,
          salary,
        })
      );

      setDepartment("");
      setSalary("");
      setStaffEmail("");
      setStaName("");
      setStaffId("");
      dispatch<any>(getAllStaff());
      navigate.navigate("Staff" as never);
    }
  };

  return (
    <View style={{ height: "100%", flex: 1 }}>
      <Text
        style={{
          fontWeight: "800",
          fontSize: 18,
          textAlign: "center",
          marginVertical: 7,
        }}
      >
        Create A new Member
      </Text>

      <View
        style={{
          gap: 10,
          marginHorizontal: 30,
          marginVertical: 10,
        }}
      >
        <TextInput
          placeholder="Staff Id"
          onChangeText={(newText) => setStaffId(newText)}
          defaultValue={staffNumber}
          style={{
            padding: 7,
            borderColor: "gray",
            borderWidth: 2,
            borderRadius: 3,
          }}
        />
        <TextInput
          placeholder="Staff Name"
          onChangeText={(newText) => setStaName(newText)}
          defaultValue={staffName}
          style={{
            padding: 7,
            borderColor: "gray",
            borderWidth: 2,
            borderRadius: 3,
          }}
        />
        <TextInput
          placeholder="Staff Email"
          onChangeText={(newText) => setStaffEmail(newText)}
          defaultValue={staffEmail}
          style={{
            padding: 7,
            borderColor: "gray",
            borderWidth: 2,
            borderRadius: 3,
          }}
        />
        <TextInput
          placeholder="Department"
          onChangeText={(newText) => setDepartment(newText)}
          defaultValue={department}
          style={{
            padding: 7,
            borderColor: "gray",
            borderWidth: 2,
            borderRadius: 3,
          }}
        />
        <TextInput
          placeholder="Salary"
          onChangeText={(newText) => setSalary(newText)}
          defaultValue={salary}
          style={{
            padding: 7,
            borderColor: "gray",
            borderWidth: 2,
            borderRadius: 3,
          }}
        />
        <TouchableOpacity
          style={{
            padding: 7,
            backgroundColor: "#1F1F3D",
            marginTop: 5,
          }}
          onPress={handleCreate}
        >
          <Text style={{ textAlign: "center", color: "white" }}>CREATE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateStaff;
