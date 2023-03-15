import { View, Text } from "react-native";
import React from "react";

interface ViewItemProps {
  data: string | number | any;
  icon: any;
  label: string;
}

const ViewItem = ({ data, icon, label }: ViewItemProps) => {
  return (
    <View
      style={{
        flexDirection: "column",
        gap: 1,
        alignItems: "flex-start",
        marginBottom: 10,
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
          backgroundColor: "#404774",
          width: "100%",
          padding: 3,
          borderRadius: 10,
        }}
      >
        {icon}
        <Text style={{ color: "#fff", fontWeight: "500", fontSize: 18 }}>
          {label}
        </Text>
      </View>
      <Text style={{ color: "#fff", fontWeight: "300", fontSize: 14 }}>
        {data}
      </Text>
    </View>
  );
};

export default ViewItem;
