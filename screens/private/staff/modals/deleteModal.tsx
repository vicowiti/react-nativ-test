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
import {
  deleteStaff,
  getAllStaff,
  updateStaff,
} from "../../../../redux/staffSlice";
import { useNavigation } from "@react-navigation/native";

const DeleteModal = (userData: EmployeeCardProps) => {
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();
  const { navigate } = useNavigation();

  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  const handleDelete = async () => {
    await dispatch<any>(deleteStaff(userData._id));

    await dispatch<any>(getAllStaff());
    hide();
    navigate("Staff" as never);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity
        onPress={show}
        style={{
          padding: 10,
          backgroundColor: "red",
          width: "30%",
          borderRadius: 10,
          borderWidth: 2,
          borderColor: "grey",
        }}
      >
        <Text style={{ textAlign: "center", fontWeight: "700" }}>Delete</Text>
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
          Confirm Delete
        </Text>

        <TouchableOpacity
          style={{
            padding: 7,
            backgroundColor: "red",
            marginTop: 5,
            borderColor: "black",
            borderWidth: 2,
            marginHorizontal: 30,
          }}
          onPress={handleDelete}
        >
          <Text style={{ textAlign: "center", color: "black" }}>Delete</Text>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
};

export default DeleteModal;
