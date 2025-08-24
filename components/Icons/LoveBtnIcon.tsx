import * as React from "react";
import { memo } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const LoveBtnIcon = ({
  isMyFav = false,
  ...props
}: SvgProps & { isMyFav: boolean }) => (
  <Svg width={50} height={50} viewBox="0 0 50 50" fill="none" {...props}>
    <Path
      fill="#000000"
      fillOpacity={0.67}
      d="M41.667 23.958c0 10.559-12.442 17.646-15.825 19.38a1.833 1.833 0 0 1-1.684 0c-3.383-1.734-15.825-8.821-15.825-19.38 0-9.375 8.075-15.625 16.667-15.625 8.89 0 16.667 6.25 16.667 15.625Z"
    />
    <Path
      fill={isMyFav ? "#4CF622" : "#000"}
      stroke={isMyFav ? "#4CF622" : "white"}
      d="m17.262 24.554 7.203 7.202c.252.252.379.38.535.38.156 0 .283-.126.535-.38l7.202-7.202c1.559-1.558 1.8-4 .578-5.833-1.907-2.856-6.155-2.71-7.859.27l-.293.517a.188.188 0 0 1-.326 0l-.293-.514c-1.704-2.984-5.952-3.13-7.859-.271a4.622 4.622 0 0 0 .578 5.831Z"
    />
  </Svg>
);
export default memo(LoveBtnIcon);
