import React, { useState, useEffect } from "react";
import xml2js from "xml2js";

export function useXML() {
  const [continentData, setContinentData] = useState([]);

  useEffect(() => {
    fetch(
      "http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso/ListOfContinentsByCode"
    )
      .then((response) => response.text())
      .then((xml) => {
        const parser = new xml2js.Parser({
          explicitArray: false,
          mergeAttrs: true,
        });
        parser.parseString(xml, (error, result) => {
          if (error) {
            console.error(error);
          } else {
            setContinentData(result);
            const json = JSON.stringify(result);
            console.log("resultjson", json);
          }
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return continentData;
}
