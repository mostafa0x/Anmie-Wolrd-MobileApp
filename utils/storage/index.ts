import AsyncStorage from "@react-native-async-storage/async-storage";

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
