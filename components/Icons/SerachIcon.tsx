import * as React from "react";
import { memo } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const SerachIcon = (props: SvgProps) => (
  <Svg width={35} height={35} viewBox="0 0 35 35" fill="none" {...props}>
    <Path
      fill="#fff"
      d="M20.417 2.917a11.666 11.666 0 1 1-6.557 21.32l-7.21 7.205a2.187 2.187 0 1 1-3.092-3.092l7.204-7.21a11.667 11.667 0 0 1 9.655-18.223Zm7.291 11.666a7.292 7.292 0 1 0-14.583 0 7.292 7.292 0 0 0 14.583 0Z"
    />
  </Svg>
);
export default memo(SerachIcon);
