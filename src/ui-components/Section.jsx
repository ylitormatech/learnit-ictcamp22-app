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
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function Section(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Icon: {
          paths: [
            {
              d: "M0 0L0 -1L-1 -1L-1 0L0 0ZM317 0L318 0L318 -1L317 -1L317 0ZM317 72L317 73L318 73L318 72L317 72ZM0 72L-1 72L-1 73L0 73L0 72ZM0 1L317 1L317 -1L0 -1L0 1ZM317 71L0 71L0 73L317 73L317 71ZM1 72L1 0L-1 0L-1 72L1 72ZM316 0L316 72L318 72L318 0L316 0Z",
              stroke: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              strokeWidth: 1,
            },
            {
              d: "M0 0L317 0L317 72L0 72L0 0Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
          ],
        },
        Text: {},
        Section: {},
      },
      variantValues: { completed: "False", isLast: "True" },
    },
    {
      overrides: {
        Icon: {
          paths: [
            {
              d: "M0 0L0 -1L-1 -1L-1 0L0 0ZM317 0L318 0L318 -1L317 -1L317 0ZM317 72L317 73L318 73L318 72L317 72ZM0 72L-1 72L-1 73L0 73L0 72ZM0 1L317 1L317 -1L0 -1L0 1ZM317 71L0 71L0 73L317 73L317 71ZM1 72L1 0L-1 0L-1 72L1 72ZM316 0L316 72L318 72L318 0L316 0Z",
              stroke: "rgba(255,255,255,0.3)",
              fillRule: "nonzero",
              strokeWidth: 1,
            },
            {
              d: "M0 0L317 0L317 72L0 72L0 0Z",
              fill: "rgba(32,99,155,1)",
              fillRule: "nonzero",
            },
          ],
        },
        Text: { color: "rgba(255,255,255,1)" },
        Section: {},
      },
      variantValues: { completed: "True", isLast: "True" },
    },
    {
      overrides: {
        Icon: {
          paths: [
            {
              d: "M0 0L0 -1L-1 -1L-1 0L0 0ZM273.773 0L274.413 -0.76842L274.135 -1L273.773 -1L273.773 0ZM273.773 72L273.773 73L274.135 73L274.413 72.7684L273.773 72ZM0 72L-1 72L-1 73L0 73L0 72ZM317 36L317.64 36.7684L318.563 36L317.64 35.2316L317 36ZM0 1L273.773 1L273.773 -1L0 -1L0 1ZM273.773 71L0 71L0 73L273.773 73L273.773 71ZM1 72L1 0L-1 0L-1 72L1 72ZM273.133 0.76842L316.36 36.7684L317.64 35.2316L274.413 -0.76842L273.133 0.76842ZM316.36 35.2316L273.133 71.2316L274.413 72.7684L317.64 36.7684L316.36 35.2316Z",
              stroke: "rgba(255,255,255,0.3)",
              fillRule: "nonzero",
              strokeWidth: 1,
            },
            {
              d: "M0 0L273.773 0L317 36L273.773 72L0 72L0 0Z",
              fill: "rgba(32,99,155,1)",
              fillRule: "nonzero",
            },
          ],
        },
        Text: { color: "rgba(255,255,255,1)" },
        Section: {},
      },
      variantValues: { completed: "True", isLast: "False" },
    },
    {
      overrides: {
        Icon: {
          paths: [
            {
              d: "M0 0L0 -1L-1 -1L-1 0L0 0ZM273.773 0L274.413 -0.76842L274.135 -1L273.773 -1L273.773 0ZM273.773 72L273.773 73L274.135 73L274.413 72.7684L273.773 72ZM0 72L-1 72L-1 73L0 73L0 72ZM317 36L317.64 36.7684L318.563 36L317.64 35.2316L317 36ZM0 1L273.773 1L273.773 -1L0 -1L0 1ZM273.773 71L0 71L0 73L273.773 73L273.773 71ZM1 72L1 0L-1 0L-1 72L1 72ZM273.133 0.76842L316.36 36.7684L317.64 35.2316L274.413 -0.76842L273.133 0.76842ZM316.36 35.2316L273.133 71.2316L274.413 72.7684L317.64 36.7684L316.36 35.2316Z",
              stroke: "rgba(0,0,0,0.09)",
              fillRule: "nonzero",
              strokeWidth: 1,
            },
            {
              d: "M0 0L273.773 0L317 36L273.773 72L0 72L0 0Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
          ],
        },
        Text: {},
        Section: {},
      },
      variantValues: { completed: "False", isLast: "False" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <View
      width="317px"
      height="72px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Section")}
    >
      <Icon
        width="317px"
        height="72px"
        viewBox={{ minX: 0, minY: 0, width: 317, height: 72 }}
        paths={[
          {
            d: "M0 0L0 -1L-1 -1L-1 0L0 0ZM273.773 0L274.413 -0.76842L274.135 -1L273.773 -1L273.773 0ZM273.773 72L273.773 73L274.135 73L274.413 72.7684L273.773 72ZM0 72L-1 72L-1 73L0 73L0 72ZM317 36L317.64 36.7684L318.563 36L317.64 35.2316L317 36ZM0 1L273.773 1L273.773 -1L0 -1L0 1ZM273.773 71L0 71L0 73L273.773 73L273.773 71ZM1 72L1 0L-1 0L-1 72L1 72ZM273.133 0.76842L316.36 36.7684L317.64 35.2316L274.413 -0.76842L273.133 0.76842ZM316.36 35.2316L273.133 71.2316L274.413 72.7684L317.64 36.7684L316.36 35.2316Z",
            stroke: "rgba(0,0,0,0.3)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
          {
            d: "M0 0L273.773 0L317 36L273.773 72L0 72L0 0Z",
            fill: "rgba(255,255,255,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "Icon")}
      ></Icon>
      <Text
        fontFamily="Bai Jamjuree"
        fontSize="26px"
        fontWeight="600"
        color="rgba(23,63,95,1)"
        lineHeight="32.5px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="1.15px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="27.4%"
        bottom="26.77%"
        left="31.23%"
        right="30.91%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Osa-alue"
        {...getOverrideProps(overrides, "Text")}
      ></Text>
    </View>
  );
}
