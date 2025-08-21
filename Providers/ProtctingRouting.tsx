import GlobalError from "@/components/GlobalError";
import { StateType } from "@/types/store/StateType";
import React from "react";
import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";

export default function ProtctingRoutingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { currentError } = useSelector(
    (state: StateType) => state.GlobalErrorReducer
  );
  return (
    <>
      {currentError && <GlobalError />}
      {children}
    </>
  );
}

const styles = StyleSheet.create({});
