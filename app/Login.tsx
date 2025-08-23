import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import React, { useEffect } from "react";
import { Button, StyleSheet, View } from "react-native";

export default function App() {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        "860499439086-c9kq4an7aqgqf4bkb0kg5ia7tppgcu40.apps.googleusercontent.com", // من Google Console
      offlineAccess: true, // لو عايز refresh token
    });
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log("User Info:", userInfo);
      // تقدر هنا تبعت التوكن للسيرفر أو تخزن البيانات في Redux/AsyncStorage
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log("User cancelled the login flow");
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log("Sign in in progress");
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log("Play services not available or outdated");
      } else {
        console.error("Some other error happened:", error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Sign in with Google" onPress={signIn} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
