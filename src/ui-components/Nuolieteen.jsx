/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
<<<<<<< HEAD
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Icon } from "@aws-amplify/ui-react";
export default function Nuolieteen(props) {
  const { questions, overrides, ...rest } = props;
  const nuolieteenOnClick = useNavigateAction({
    type: "url",
    url: questions?.id,
  });
=======
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon } from "@aws-amplify/ui-react";
export default function Nuolieteen(props) {
  const { overrides, ...rest } = props;
>>>>>>> e3d0c8f6f31c72d69653456acd98bf35b3d250b9
  return (
    <Icon
      width="40px"
      height="40px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      viewBox={{ minX: 0, minY: 0, width: 40, height: 40 }}
      paths={[
        {
          d: "M40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20Z",
          fill: "rgba(255,30,165,1)",
          fillRule: "nonzero",
          style: { transform: "translate(0%, 0%)" },
        },
        {
          d: "M0 -1.5C-0.828427 -1.5 -1.5 -0.828427 -1.5 0C-1.5 0.828427 -0.828427 1.5 0 1.5L0 -1.5ZM21.0607 1.06066C21.6464 0.474874 21.6464 -0.474874 21.0607 -1.06066L11.5147 -10.6066C10.9289 -11.1924 9.97919 -11.1924 9.3934 -10.6066C8.80761 -10.0208 8.80761 -9.07107 9.3934 -8.48528L17.8787 0L9.3934 8.48528C8.80761 9.07107 8.80761 10.0208 9.3934 10.6066C9.97919 11.1924 10.9289 11.1924 11.5147 10.6066L21.0607 1.06066ZM0 1.5L20 1.5L20 -1.5L0 -1.5L0 1.5Z",
          stroke: "rgba(255,255,255,1)",
          fillRule: "nonzero",
          strokeWidth: 3,
          style: { transform: "translate(25%, 50%)" },
        },
      ]}
<<<<<<< HEAD
      onClick={() => {
        nuolieteenOnClick();
      }}
=======
>>>>>>> e3d0c8f6f31c72d69653456acd98bf35b3d250b9
      {...rest}
      {...getOverrideProps(overrides, "Nuolieteen")}
    ></Icon>
  );
}
