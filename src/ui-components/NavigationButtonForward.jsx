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
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function NavigationButtonForward(props) {
  const { navigationButtonForward, overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Ellipse: {
          width: "38px",
          height: "38px",
          viewBox: { minX: 0, minY: 0, width: 38, height: 38 },
          paths: [
            {
              d: "M38 19C38 29.4934 29.4934 38 19 38C8.50659 38 0 29.4934 0 19C0 8.50659 8.50659 0 19 0C29.4934 0 38 8.50659 38 19Z",
              fill: "rgba(214,22,137,1)",
              fillRule: "nonzero",
            },
          ],
        },
        Arrow: {
          width: "19px",
          viewBox: { minX: 0, minY: 0, width: 19, height: 1 },
          paths: [
            {
              d: "M0 -1.5C-0.828427 -1.5 -1.5 -0.828427 -1.5 0C-1.5 0.828427 -0.828427 1.5 0 1.5L0 -1.5ZM20.0607 1.06066C20.6464 0.474874 20.6464 -0.474874 20.0607 -1.06066L10.5147 -10.6066C9.92893 -11.1924 8.97919 -11.1924 8.3934 -10.6066C7.80761 -10.0208 7.80761 -9.07107 8.3934 -8.48528L16.8787 0L8.3934 8.48528C7.80761 9.07107 7.80761 10.0208 8.3934 10.6066C8.97919 11.1924 9.92893 11.1924 10.5147 10.6066L20.0607 1.06066ZM0 1.5L19 1.5L19 -1.5L0 -1.5L0 1.5Z",
              stroke: "rgba(255,255,255,1)",
              fillRule: "nonzero",
              strokeWidth: 3,
            },
          ],
        },
        Icon: {
          width: "38px",
          height: "38px",
          top: "2.5%",
          bottom: "2.5%",
          left: "74.34%",
          right: "0.66%",
        },
        Text: { color: "rgba(20,20,20,1)" },
        NavigationButtonForward: {},
      },
      variantValues: { state: "Click" },
    },
    {
      overrides: {
        Ellipse: {
          paths: [
            {
              d: "M40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20Z",
              fill: "rgba(214,22,137,1)",
              fillRule: "nonzero",
            },
          ],
        },
        Arrow: {},
        Icon: {},
        Text: { color: "rgba(20,20,20,1)" },
        NavigationButtonForward: {},
      },
      variantValues: { state: "Hover" },
    },
    {
      overrides: {
        Ellipse: {},
        Arrow: {},
        Icon: {},
        Text: {},
        NavigationButtonForward: {},
      },
      variantValues: { state: "Default" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  const navigationButtonForwardOnClick = useNavigateAction({
    type: "url",
    url: "",
  });
  return (
    <View
      width="152px"
      height="40px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      onClick={() => {
        navigationButtonForwardOnClick();
      }}
      {...rest}
      {...getOverrideProps(overrides, "NavigationButtonForward")}
    >
      <View
        padding="0px 0px 0px 0px"
        width="40px"
        height="40px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="73.68%"
        right="0%"
        {...getOverrideProps(overrides, "Icon")}
      >
        <Icon
          width="40px"
          height="40px"
          viewBox={{ minX: 0, minY: 0, width: 40, height: 40 }}
          paths={[
            {
              d: "M40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20Z",
              fill: "rgba(255,30,165,1)",
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
          {...getOverrideProps(overrides, "Ellipse")}
        ></Icon>
        <Icon
          width="20px"
          height="0px"
          viewBox={{ minX: 0, minY: 0, width: 20, height: 1 }}
          paths={[
            {
              d: "M0 -1.5C-0.828427 -1.5 -1.5 -0.828427 -1.5 0C-1.5 0.828427 -0.828427 1.5 0 1.5L0 -1.5ZM21.0607 1.06066C21.6464 0.474874 21.6464 -0.474874 21.0607 -1.06066L11.5147 -10.6066C10.9289 -11.1924 9.97919 -11.1924 9.3934 -10.6066C8.80761 -10.0208 8.80761 -9.07107 9.3934 -8.48528L17.8787 0L9.3934 8.48528C8.80761 9.07107 8.80761 10.0208 9.3934 10.6066C9.97919 11.1924 10.9289 11.1924 11.5147 10.6066L21.0607 1.06066ZM0 1.5L20 1.5L20 -1.5L0 -1.5L0 1.5Z",
              stroke: "rgba(255,255,255,1)",
              fillRule: "nonzero",
              strokeWidth: 3,
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="50%"
          bottom="50%"
          left="25%"
          right="25%"
          transformOrigin="top left"
          transform="rotate(0deg)"
          {...getOverrideProps(overrides, "Arrow")}
        ></Icon>
      </View>
      <Text
        fontFamily="Bai Jamjuree"
        fontSize="20px"
        fontWeight="600"
        color="rgba(52,64,84,1)"
        lineHeight="20px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="1.85px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="20%"
        bottom="30%"
        left="0%"
        right="32.89%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Seuraava"
        {...getOverrideProps(overrides, "Text")}
      ></Text>
    </View>
  );
}
