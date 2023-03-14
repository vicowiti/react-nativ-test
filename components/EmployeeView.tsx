import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export interface EmployeeCardProps {
  staffNumber: string;
  staffName: string;
  staffEmail: string;
  department: string;
  salary: string;
  _id: string;
}

const data = {
  staffNumber: "ZAAC001",
  staffName: "John Doe",
  staffEmail: "jd@zamara.co.ke",
  department: "ICT",
  salary: "50000",
};

const EmployeeCard = ({
  _id,
  staffNumber,
  staffName,
  staffEmail,
  department,
  salary,
}: EmployeeCardProps) => {
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigate(
          "EditStaff" as never,
          {
            staffNumber,
            staffName,
            staffEmail,
            department,
            salary,
            _id,
          } as never
        )
      }
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 8,
          marginHorizontal: 5,
          borderBottomColor: "grey",
          borderBottomWidth: 1,
        }}
      >
        <View>
          <Text style={{ fontSize: 10 }}>{staffNumber}</Text>
          <Text style={{ fontWeight: "700" }}>{staffName}</Text>
          <Text style={{ fontSize: 10 }}>{staffEmail}</Text>
        </View>

        <Entypo name="chevron-small-right" size={50} color="black" />
      </View>
    </TouchableOpacity>
  );
};

export default EmployeeCard;
