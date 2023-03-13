import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "../../redux/slices/authSlice";

export const storeData = async (user: User) => {
  try {
    await AsyncStorage.setItem("user", JSON.stringify(user));
  } catch (error) {
    console.log("User could not be saved");
  }
};

export const getData = async () => {
  try {
    const value = await AsyncStorage.getItem("user");
    if (value !== null) {
      // value previously stored
    } else {
      return value;
    }
  } catch (e) {
    // error reading value
    console.log("Value could not be read");
  }
};
