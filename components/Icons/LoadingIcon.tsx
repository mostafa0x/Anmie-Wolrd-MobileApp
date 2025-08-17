import * as React from "react";
import { memo } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const LoadingIcon = (props: SvgProps) => (
  <Svg width={39} height={39} viewBox="0 0 39 39" fill="none" {...props}>
    <Path
      fill="#F6F4F4"
      fillRule="evenodd"
      d="M27.219 19.5a7.72 7.72 0 1 0-15.439 0 7.72 7.72 0 0 0 15.439 0Zm-17.063 0a4.469 4.469 0 1 0-8.937 0 4.469 4.469 0 0 0 8.937 0Zm23.157-4.469a4.47 4.47 0 1 1 0 8.938 4.47 4.47 0 0 1 0-8.938Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default memo(LoadingIcon);
