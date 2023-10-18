/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { SearchField, SelectField, View } from "@aws-amplify/ui-react";
export default function Searchselectfield(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="393px"
      height="32px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Searchselectfield")}
      {...rest}
    >
      <SearchField
        width="300px"
        position="absolute"
        top="0%"
        bottom="0%"
        left="23.66%"
        right="0%"
        placeholder="Placeholder"
        size="small"
        isDisabled={false}
        labelHidden={true}
        variation="Half"
        {...getOverrideProps(overrides, "SearchField")}
      ></SearchField>
      <SelectField
        width="92px"
        placeholder="All"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="76.59%"
        size="small"
        isDisabled={false}
        labelHidden={true}
        variation="f"
        {...getOverrideProps(overrides, "SelectField")}
      ></SelectField>
    </View>
  );
}
