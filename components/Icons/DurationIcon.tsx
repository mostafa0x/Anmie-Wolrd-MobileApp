import * as React from "react";
import { memo } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const DurationIcon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fill="#6C6AA4"
      fillRule="evenodd"
      d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm0-2a9 9 0 1 1 0-18 9 9 0 0 1 0 18Zm1-15v6h-2V6h2Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default memo(DurationIcon);
