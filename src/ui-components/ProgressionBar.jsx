/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Section from "./Section";
import { View } from "@aws-amplify/ui-react";
export default function ProgressionBar(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="832px"
      height="73px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "ProgressionBar")}
    >
      <Section
        width="317px"
        height="72px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="1.37%"
        left="61.9%"
        right="0%"
        padding="0px 0px 0px 0px"
        completed="False"
        isLast="True"
        {...getOverrideProps(overrides, "_Section3")}
      ></Section>
      <Section
        width="317px"
        height="72px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="1.37%"
        left="30.89%"
        right="31.01%"
        padding="0px 0px 0px 0px"
        completed="False"
        isLast="False"
        {...getOverrideProps(overrides, "_Section2")}
      ></Section>
      <Section
        width="317px"
        height="72px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="1.37%"
        left="0%"
        right="61.9%"
        padding="0px 0px 0px 0px"
        completed="False"
        isLast="False"
        {...getOverrideProps(overrides, "_Section1")}
      ></Section>
    </View>
  );
}
