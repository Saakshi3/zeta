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
import { Badge, Flex } from "@aws-amplify/ui-react";
export default function ProviderStatus(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { Badge: {}, ProviderStatus: {} },
      variantValues: { property1: "Default" },
    },
    {
      overrides: {
        Badge: { variation: "warning", children: "Unsigned" },
        ProviderStatus: {},
      },
      variantValues: { property1: "Unsigned" },
    },
    {
      overrides: {
        Badge: { variation: "warning", children: "Draft" },
        ProviderStatus: {},
      },
      variantValues: { property1: "Draft" },
    },
    {
      overrides: {
        Badge: { variation: "error", children: "Support" },
        ProviderStatus: {},
      },
      variantValues: { property1: "Support" },
    },
    {
      overrides: {
        Badge: { variation: "default", children: "Expired" },
        ProviderStatus: {},
      },
      variantValues: { property1: "Expired" },
    },
    {
      overrides: { Badge: { children: "Approved" }, ProviderStatus: {} },
      variantValues: { property1: "Approved" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="0"
      direction="row"
      width="66px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      display="flex"
      {...getOverrideProps(overrides, "ProviderStatus")}
      {...rest}
    >
      <Badge
        width="66px"
        height="unset"
        shrink="0"
        size="small"
        variation="success"
        children="Sent"
        {...getOverrideProps(overrides, "Badge")}
      ></Badge>
    </Flex>
  );
}
