/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import LogoWithText from "./LogoWithText";
import {
  Button,
  Flex,
  PasswordField,
  Text,
  TextField,
} from "@aws-amplify/ui-react";
export default function LoginPatientNewPassword(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="row"
      width="1280px"
      height="832px"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "LoginPatientNewPassword")}
      {...rest}
    >
      <Flex
        gap="16px"
        direction="column"
        width="527px"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="112px 60px 112px 60px"
        {...getOverrideProps(overrides, "Frame 1")}
      >
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="24px"
          justifyContent="space-between"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 1px 0px 1px"
          {...getOverrideProps(overrides, "Logo")}
        >
          <LogoWithText
            width="236px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            color="neutral"
            {...getOverrideProps(overrides, "LogoWithText")}
          ></LogoWithText>
        </Flex>
        <Flex
          gap="0"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 26086258")}
        >
          <Text
            fontFamily="Inter"
            fontSize="32px"
            fontWeight="500"
            color="rgba(13,26,38,1)"
            lineHeight="40px"
            textAlign="center"
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
            children="Enter New Password"
            {...getOverrideProps(overrides, "Enter New Password")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(128,128,128,1)"
            lineHeight="24px"
            textAlign="center"
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
            children="Please enter your new password"
            {...getOverrideProps(overrides, "Please enter your new password")}
          ></Text>
        </Flex>
        <Flex
          gap="16px"
          direction="column"
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
          {...getOverrideProps(overrides, "labels")}
        >
          <TextField
            width="unset"
            height="unset"
            label="Email"
            placeholder="sarah@ABC.com"
            shrink="0"
            alignSelf="stretch"
            size="small"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField")}
          ></TextField>
          <PasswordField
            width="unset"
            height="unset"
            label="Password"
            placeholder="**********"
            shrink="0"
            alignSelf="stretch"
            size="small"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            hideShowPassword={true}
            {...getOverrideProps(overrides, "PasswordField")}
          ></PasswordField>
        </Flex>
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="space-between"
          alignItems="center"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "CTA")}
        >
          <Button
            width="unset"
            height="40px"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            variation="primary"
            children="CONTINUE"
            style={{ backgroundColor: '#043495' }} 
            {...getOverrideProps(overrides, "Button")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
