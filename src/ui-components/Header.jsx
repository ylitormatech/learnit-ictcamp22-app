/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Header(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { "Rectangle 1": {}, BEARIT: {}, Header: {} },
      variantValues: { property1: "Default" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <View
      width="1920px"
      height="210px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Header")}
    >
      <View
        width="1920px"
        height="210px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        border="1px SOLID rgba(0,0,0,0.2)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(23,63,95,1)"
        {...getOverrideProps(overrides, "Rectangle 1")}
      ></View>
      <Text
        fontFamily="Orbitron"
        fontSize="128px"
        fontWeight="800"
        color="rgba(255,255,255,1)"
        lineHeight="160.51199340820312px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="6.25px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="11.43%"
        bottom="10.95%"
        left="34.95%"
        right="34.95%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="BEARIT"
        {...getOverrideProps(overrides, "BEARIT")}
      ></Text>
    </View>
  );
}
