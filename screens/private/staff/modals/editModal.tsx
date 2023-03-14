import {
  View,
  Text,
  Modal,
  SafeAreaView,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { EmployeeCardProps } from "../../../../components/EmployeeView";
import { useDispatch } from "react-redux";
import { getAllStaff, updateStaff } from "../../../../redux/staffSlice";
import { useNavigation } from "@react-navigation/native";

const EditModal = (userData: EmployeeCardProps) => {
  const [visible, setVisible] = useState(false);
  const [staffNumber, setStaffId] = useState(userData.staffNumber);
  const [staffName, setStaName] = useState(userData.staffName);
  const [staffEmail, setStaffEmail] = useState(userData.staffEmail);
  const [department, setDepartment] = useState(userData.department);
  const [salary, setSalary] = useState(userData.salary);
  const dispatch = useDispatch();
  const { navigate } = useNavigation();

  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  const handleEdit = async () => {
    if (staffNumber && staffName && staffEmail && department && salary) {
      await dispatch<any>(
        updateStaff({
          _id: userData._id,
          dataT: { staffNumber, staffEmail, staffName, department, salary },
        })
      );

      await dispatch<any>(getAllStaff());
      hide();
      navigate("Staff" as never);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity
        onPress={show}
        style={{
          padding: 10,
          backgroundColor: "yellow",
          width: "30%",
          borderRadius: 10,
          borderWidth: 2,
          borderColor: "grey",
        }}
      >
        <Text style={{ textAlign: "center", fontWeight: "700" }}>Edit</Text>
      </TouchableOpacity>
      <Modal
        visible={visible}
        animationType="slide"
        onRequestClose={hide}
        style={{ margin: 10, width: "90%" }}
      >
        <Text
          style={{
            fontWeight: "800",
            fontSize: 18,
            textAlign: "center",
            marginVertical: 7,
          }}
        >
          Edit a Member
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
        </View>
        <TouchableOpacity
          style={{
            padding: 7,
            backgroundColor: "yellow",
            marginTop: 5,
            borderColor: "black",
            borderWidth: 2,
            marginHorizontal: 30,
          }}
          onPress={handleEdit}
        >
          <Text style={{ textAlign: "center", color: "black" }}>EDIT</Text>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
};

export default EditModal;
