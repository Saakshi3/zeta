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
import IconKPI from "./IconKPI";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function ItemCard(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "30": {},
        "icon - KPI ": {},
        "Today\u2019s Appointment": {},
        "Product Title": {},
        "Frame 417": {},
        MyIcon: {},
        ItemCard: {},
      },
      variantValues: { type: "Default" },
    },
    {
      overrides: {
        "30": {},
        "icon - KPI ": { type: "Patients" },
        "Today\u2019s Appointment": {},
        "Product Title": {},
        "Frame 417": {},
        MyIcon: {},
        ItemCard: {},
      },
      variantValues: { type: "example 2" },
    },
    {
      overrides: {
        "30": {},
        "icon - KPI ": { type: "Patient Bed" },
        "Today\u2019s Appointment": {},
        "Product Title": {},
        "Frame 417": {},
        MyIcon: {},
        ItemCard: {},
      },
      variantValues: { type: "example3" },
    },
    {
      overrides: {
        "30": {},
        "icon - KPI ": { type: "Support" },
        "Today\u2019s Appointment": {},
        "Product Title": {},
        "Frame 417": {},
        MyIcon: {},
        ItemCard: {},
      },
      variantValues: { type: "Type4" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="16px"
      direction="row"
      width="304px"
      height="90px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      boxShadow="0px 2px 2px rgba(0, 0, 0, 0.10000000149011612)"
      borderRadius="8px"
      padding="8px 8px 8px 22px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "ItemCard")}
      {...rest}
    >
      <Flex
        gap="20px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 417")}
      >
        <IconKPI
          width="40px"
          height="40px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          type="Doctor"
          {...getOverrideProps(overrides, "icon - KPI ")}
        ></IconKPI>
        <Flex
          gap="8px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Product Title")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="600"
            color="rgba(13,26,38,1)"
            lineHeight="16px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Today’s Appointment"
            {...getOverrideProps(overrides, "Today\u2019s Appointment")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="600"
            color="rgba(4,52,149,1)"
            lineHeight="16px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="30"
            {...getOverrideProps(overrides, "30")}
          ></Text>
        </Flex>
      </Flex>
      <View
        width="24px"
        height="24px"
        {...getOverrideProps(overrides, "MyIcon")}
      ></View>
    </Flex>
  );
}
