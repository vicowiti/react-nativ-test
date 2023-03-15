import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import axios, { AxiosRequestConfig } from "axios";
import { XMLParser } from "fast-xml-parser";
import { xml2json } from "xml-js";
import { useXML } from "../../services/xml2Json";
import { FontAwesome5 } from "@expo/vector-icons";

const Continents = () => {
  const continents = useXML();

  return (
    <View>
      <Text
        style={{
          marginTop: 20,
          textAlign: "center",
          fontWeight: "900",
          fontSize: 20,
          marginBottom: 20,
        }}
      >
        Continents
      </Text>
      <View style={{ justifyContent: "center", alignItems: "center", gap: 10 }}>
        {continents.ArrayOftContinent?.tContinent?.map(
          (item: { sCode: string; sName: string }) => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 50,
                marginHorizontal: 20,
                width: "60%",
              }}
            >
              <FontAwesome5 name="globe-africa" size={24} color="black" />
              <Text>{item.sCode}</Text>
              <Text>{item.sName}</Text>
            </View>
          )
        )}
      </View>
    </View>
  );
};

export default Continents;
