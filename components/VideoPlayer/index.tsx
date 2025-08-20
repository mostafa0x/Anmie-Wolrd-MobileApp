type stateYoutubePlayer =
  | "unstarted"
  | "ended"
  | "playing"
  | "paused"
  | "buffering"
  | "cued";
import { AnmieType } from "@/types/store/AppSliceType";
import { rh, rw } from "@/utils/dimensions";
import React, { memo, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

function VideoPlayer({
  ref,
  item,
}: {
  ref: React.RefObject<any>;
  item: AnmieType | null;
}) {
  const statuePlayer = useCallback((state: stateYoutubePlayer) => {
    console.log(state);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <YoutubePlayer
          height={styles.player.height}
          play={false}
          videoId={item?.trailer?.youtube_id ?? ""}
          onChangeState={statuePlayer}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: rw(20),
    overflow: "hidden",
    backgroundColor: "black",
    height: rh(210),
  },
  wrapper: {
    overflow: "hidden",
  },
  player: {
    height: rh(250),
  },
});
export default memo(VideoPlayer);
