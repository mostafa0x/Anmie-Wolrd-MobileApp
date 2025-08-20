import * as React from "react";
import { memo } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const PlayIcon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fill="#fff"
      d="M43.71 19.096a6.12 6.12 0 0 1 0 10.808L17.552 44.13c-4.212 2.292-9.385-.688-9.385-5.403v-28.45c0-4.717 5.173-7.695 9.385-5.407L43.71 19.096Z"
    />
  </Svg>
);
export default memo(PlayIcon);
