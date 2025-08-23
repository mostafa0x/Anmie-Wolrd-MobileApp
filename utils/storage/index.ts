import { userDataType } from "@/types/store/UserSliceType";
import AsyncStorage from "@react-native-async-storage/async-storage";

type dataType = {
  userToken: string | null;
  userData: userDataType | null;
};
export const SetUserData = async (data: dataType) => {
  if (!data.userToken) throw "not found data";
  try {
    await AsyncStorage.multiSet([
      ["@userToken", data.userToken],
      ["@userData", JSON.stringify(data.userData)],
    ]);
  } catch (err: any) {
    throw err;
  }
};

export const GetUserData = async () => {
  try {
    const store = await AsyncStorage.multiGet(["@userToken", "@userData"]);
    const [userToken, userData] = store.map((item) => item[1]);
    const userDataJSON = userData ? await JSON.parse(userData) : null;
    return {
      userToken,
      userData: userDataJSON,
    };
  } catch (err: any) {
    console.log(err);
    throw err;
  }
};
