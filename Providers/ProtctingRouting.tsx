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

  useEffect(() => {
    const init = async () => {
      await useInit(dispatch);
      setIsMounted(true);
    };
    init();
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    if (userToken) {
      router.replace("/");
    } else {
      router.replace("/Auth");
    }

    dispatch(setIsLoadingApp(false));
  }, [isMounted, userToken]);

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
