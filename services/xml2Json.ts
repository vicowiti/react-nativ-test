import { AxiosRequestConfig } from "axios";
import axios from "axios";
import X2JS from "x2js";

export const xmlToJson = async () => {
  let x2js = new X2JS();
  const config: AxiosRequestConfig<any> = {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  };
  const response = await axios.get(
    "http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso/ListOfContinentsByCode",
    config
  );

  const json = x2js.xml2js(response.data);

  return json;
};

console.log(xmlToJson());
