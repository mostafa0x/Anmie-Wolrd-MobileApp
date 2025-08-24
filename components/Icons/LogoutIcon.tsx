import * as React from "react";
import { memo } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const LogoutIcon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fill="#3B65F0"
      fillRule="evenodd"
      d="M11.5 2.396a9.104 9.104 0 1 0 6.64 15.333h3.028A11.491 11.491 0 0 1 11.5 23C5.15 23 0 17.85 0 11.5S5.15 0 11.5 0a11.49 11.49 0 0 1 9.669 5.27H18.14a9.076 9.076 0 0 0-6.64-2.874ZM23 11.5l-4.313-4.313H17.25v3.115H8.146v2.396h9.104v3.114h1.438L23 11.5Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default memo(LogoutIcon);
