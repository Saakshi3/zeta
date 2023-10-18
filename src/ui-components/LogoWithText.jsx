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
export default function LogoWithText(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { Z: {}, logo: {}, Label: {}, LogoWithText: {} },
      variantValues: { color: "neutral" },
    },
    {
      overrides: {
        Z: {},
        logo: {},
        Label: { color: "rgba(48,64,80,1)" },
        LogoWithText: {},
      },
      variantValues: { color: "color3" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <View
      width="242px"
      height="19px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "LogoWithText")}
      {...rest}
    >
      <View
        width="127.88px"
        height="18.91px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "logo")}
      >
        <Text
          fontFamily="DM Sans"
          fontSize="30px"
          fontWeight="700"
          color="rgba(63,81,181,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0px"
          width="21px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="-5px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Z"
          {...getOverrideProps(overrides, "Z")}
        ></Text>
      </View>
      <Text
        fontFamily="Rubik"
        fontSize="16px"
        fontWeight="500"
        color="rgba(137,148,159,1)"
        lineHeight="19px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="220px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="0px"
        left="22px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Evergreen Health Network"
        {...getOverrideProps(overrides, "Label")}
      ></Text>
    </View>
  );
}
