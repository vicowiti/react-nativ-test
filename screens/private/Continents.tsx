import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import axios, { AxiosRequestConfig } from "axios";
import { XMLParser } from "fast-xml-parser";
import { xml2json } from "xml-js";

const Continents = () => {
  const [continentData, setContinentData] = useState<any>(null);

  const config: AxiosRequestConfig<any> = {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  };

  useEffect(() => {
    axios
      .get(
        "http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso/ListOfContinentsByCode",
        config
      )
      .then(function (response) {
        setContinentData({ authors: response.data });
        xml2json(continentData, { compact: true });
        console.log("continents", continentData);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  if (continentData) {
    console.log("mycontinents", continentData);
    const parser = new XMLParser();
    let jObj = parser.parse(continentData);
    console.log("JSON", jObj);
  }

  return (
    <View>
      <Text>Continents</Text>
    </View>
  );
};

export default Continents;
