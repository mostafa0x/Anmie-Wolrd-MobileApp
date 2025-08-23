import { rf } from "@/utils/dimensions";
import { Skeleton } from "moti/skeleton";
import React, { memo, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Avatar } from "react-native-paper";

function AvatarFC({ avatar = "" }: { avatar: string }) {
  const defAvatar = require("@/assets/images/Avatar.jpg");
  const currentAvatar = avatar ? { uri: avatar } : defAvatar;
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <Skeleton width={rf(90)} radius={"round"} height={rf(90)} />
      )}
      <View
        style={{
          position: isLoading ? "absolute" : "relative",
          zIndex: isLoading ? -1 : 1,
        }}
      >
        <Avatar.Image
          size={rf(90)}
          source={currentAvatar}
          onLoadStart={() => setIsLoading(true)}
          onLoadEnd={() => setIsLoading(false)}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({});

export default memo(AvatarFC);
