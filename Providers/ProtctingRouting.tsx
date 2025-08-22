import GlobalError from "@/components/GlobalError";
import LinearView from "@/components/LinearView";
import SplashScreen from "@/components/SplashScreen";
import useInit from "@/hooks/useInit";
import { setIsLoadingApp } from "@/lib/store/AppSlice";
import { StateType } from "@/types/store/StateType";
import { usePathname, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ProtctingRoutingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useDispatch();
  const router = useRouter();
  const path = usePathname();
  const { currentError } = useSelector(
    (state: StateType) => state.GlobalErrorReducer
  );
  const { isLoadingApp } = useSelector((state: StateType) => state.AppReducer);
  const { userToken } = useSelector((state: StateType) => state.UserReducer);
  const [isMounted, setIsMounted] = useState(false);
  const pathAuth = ["/Auth"];
  const pathSafe = [
    "/",
    "/Serach",
    "/SearchResults",
    "/Serach",
    "/Menu",
    "/AnmieInfo",
  ];

  useEffect(() => {
    if (isMounted) return;
    let isActive = true;
    const init = async () => {
      await useInit(dispatch);
      if (isActive) setIsMounted(true);
      dispatch(setIsLoadingApp(false));
    };
    const delaySplash = setTimeout(init, 600);
    return () => {
      clearTimeout(delaySplash);
      isActive = false;
    };
  }, []);

  // useEffect(() => {
  //   if (!isMounted) return;
  //   console.log("rerender");
  //   if (userToken) {
  //     if (pathAuth.includes(path)) {
  //       router.replace("/");
  //     }
  //   } else {
  //     if (pathSafe.includes(path)) {
  //       router.replace("/Auth");
  //     }
  //   }
  //   dispatch(setIsLoadingApp(false));
  // }, [isMounted, userToken, path]);

  if (isLoadingApp) {
    return (
      <LinearView>
        <SplashScreen />
      </LinearView>
    );
  }

  return (
    <>
      {currentError && <GlobalError />}
      {children}
    </>
  );
}
