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
export default function Header2(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { "Rectangle 1": {}, BEARIT: {}, Header2: {} },
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
      height="190px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Header2")}
    >
      <View
        width="1899px"
        height="190px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="calc(50% - 95px - 10px)"
        left="calc(50% - 949.5px - 10.5px)"
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
        width="578px"
        height="147.67px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="0.9%"
        bottom="21.38%"
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
