import * as React from "react";
import { memo } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const RankIcon = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#F9AB2D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.5 12H4v12h6.5V12Z"
    />
    <Path
      stroke="#F9AB2D"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 6h-6.5v18H17V6Z"
    />
    <Path
      stroke="#F9AB2D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M23.5 16H17v8h6.5v-8Z"
    />
  </Svg>
);

export default memo(RankIcon);
