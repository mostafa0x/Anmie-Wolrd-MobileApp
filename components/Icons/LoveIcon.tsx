import * as React from "react";
import { memo } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const LoveIcon = (props: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fill="#F80C0C"
      d="m8 16-1.16-1.151C2.72 10.777 0 8.083 0 4.796 0 2.1 1.936 0 4.4 0 5.792 0 7.128.706 8 1.814 8.872.706 10.208 0 11.6 0 14.064 0 16 2.101 16 4.796c0 3.287-2.72 5.981-6.84 10.053L8 16Z"
    />
  </Svg>
);
export default memo(LoveIcon);
