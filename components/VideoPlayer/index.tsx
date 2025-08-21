type stateYoutubePlayer =
  | "unstarted"
  | "ended"
  | "playing"
  | "paused"
  | "buffering"
  | "cued";
import { AnmieType } from "@/types/store/AppSliceType";
import { rh, rw } from "@/utils/dimensions";
import { Skeleton } from "moti/skeleton";
import React, { memo, useCallback, useState } from "react";
import { StyleSheet, View } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

function VideoPlayer({
  ref,
  item,
}: {
  ref: React.RefObject<any>;
  item: AnmieType | null;
}) {
  const [isReady, setIsReady] = useState(false);
  const statuePlayer = useCallback((state: stateYoutubePlayer) => {
    console.log(state);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {!isReady && (
          <Skeleton
            width={styles.container.width}
            height={styles.container.height}
          />
        )}
        <YoutubePlayer
          height={styles.player.height}
          play={false}
          videoId={item?.trailer?.youtube_id ?? ""}
          onChangeState={statuePlayer}
          onReady={() => setIsReady(true)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: rw(20),
    overflow: "hidden",
    backgroundColor: "transparent",
    height: rh(210),
    width: "100%",
  },
  wrapper: {
    overflow: "hidden",
  },
  player: {
    height: rh(250),
  },
});
export default memo(VideoPlayer);
