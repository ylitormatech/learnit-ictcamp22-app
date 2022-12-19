/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import NavigationButtonForward from "./NavigationButtonForward";
import { View } from "@aws-amplify/ui-react";
export default function Navigation(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="372px"
      height="40px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Navigation")}
    >
      <NavigationButtonForward
        width="152px"
        height="40px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="59.14%"
        right="0%"
        padding="0px 0px 0px 0px"
        state="Default"
        {...getOverrideProps(overrides, "NavigationButtonForward4134")}
      ></NavigationButtonForward>
      <View
        {...getOverrideProps(overrides, "NavigationButtonForward4135")}
      ></View>
    </View>
  );
}
