import * as React from "react";
import { memo } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const ArrowLeftIcon = ({
  iconColor = "#000",
  ...props
}: SvgProps & { iconColor?: string }) => (
  <Svg width={35} height={32} fill="none" {...props}>
    <Path
      fill={iconColor}
      d="M0 15.556 14.581 31.11V19.447H35v-7.783H14.581V0L0 15.556Z"
    />
  </Svg>
);
export default memo(ArrowLeftIcon);
