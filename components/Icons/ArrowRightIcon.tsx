import * as React from "react";
import { memo } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const ArrowRightIcon = (props: SvgProps) => (
  <Svg width={18} height={16} viewBox="0 0 18 16" fill="none" {...props}>
    <Path fill="#fff" d="m18 8-7.499-8v5.999H0V10h10.501V16L18 8Z" />
  </Svg>
);
export default memo(ArrowRightIcon);
