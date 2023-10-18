/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import 'fontsource-inter/500.css'; // Import the specific weight you want to use'
import 'fontsource-inter/400.css';
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import "./Button.css"
import {
  Button,
  CheckboxField,
  Flex,
  PasswordField,
  Text,
  TextField,
} from "@aws-amplify/ui-react";
import Logo from "./Logo";
export default function LoginPage(props) {
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
      {...getOverrideProps(overrides, "LoginPage")}
      {...rest}
    >
      <Flex
        gap="48px"
        direction="column"
        width="653px"
        height="739px"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        position="relative"
        borderRadius="20px"
        padding="60px 60px 60px 60px"
        {...getOverrideProps(overrides, "Frame 3")}
      ></Flex>
      <Flex
        gap="16px"
        direction="column"
        width="527px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="16px 60px 16px 60px"
        {...getOverrideProps(overrides, "Frame 1")}
      >
        <Logo
          display="flex"
          gap="10px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          color="neutral"
          {...getOverrideProps(overrides, "Logo")}
        ></Logo>
        <Text
          fontFamily="Inter"
          fontSize="32px"
          fontWeight="700"
          color="rgba(13,26,38,1)"
          lineHeight="48px"
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
          children="eConsent Management System"
          {...getOverrideProps(overrides, "eConsent Management System")}
        ></Text>
        <TextField
          width="unset"
          height="unset"
          label="Email/Username"
          placeholder="Email/Username"
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
          placeholder="Password"
          shrink="0"
          alignSelf="stretch"
          size="small"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          hideShowPassword={false}
          {...getOverrideProps(overrides, "PasswordField")}
        ></PasswordField>
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="space-between"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 4372")}
        >
          <CheckboxField
            width="unset"
            height="unset"
            label="Remember me"
            shrink="0"
            size="default"
            defaultChecked={true}
            isDisabled={false}
            labelPosition="end"
            {...getOverrideProps(overrides, "CheckboxField")}
          ></CheckboxField>
          <Button
            width="unset"
            height="unset"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            variation="link"
            children="Forgot password"
            {...getOverrideProps(overrides, "Button39544126")}
          ></Button>
        </Flex>
        <Button
          width="unset"
          height="40px"
          shrink="0"
          alignSelf="stretch"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Login"
          {...getOverrideProps(overrides, "Button38741850")}
        ></Button>
        <Flex
          gap="8px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "sign up")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
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
            children="Don't have an account? "
            {...getOverrideProps(overrides, "Don't have an account?")}
          ></Text>
          <Button
            width="unset"
            height="unset"
            shrink="0"
            size="small"
            isDisabled={false}
            variation="link"
            children="Contact Help"
            {...getOverrideProps(overrides, "Button39544130")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
