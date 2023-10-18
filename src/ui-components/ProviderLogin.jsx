/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  CheckboxField,
  Flex,
  PasswordField,
  Text,
  TextField,
} from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
import LogoWithText from "./LogoWithText";
export default function ProviderLogin(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="row"
      width="1280px"
      height="832px"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      padding="32px 32px 32px 32px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "ProviderLogin")}
      {...rest}
    >
      <Flex
        gap="48px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        position="relative"
        borderRadius="20px"
        padding="60px 60px 60px 60px"
        {...getOverrideProps(overrides, "Frame 3")}
      ></Flex>
      <Flex
        gap="0"
        direction="column"
        width="527px"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="16px 0px 16px 0px"
        {...getOverrideProps(overrides, "Frame 26086262")}
      >
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-end"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 26086261")}
        >
          <MyIcon
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            type="info"
            {...getOverrideProps(overrides, "MyIcon")}
          ></MyIcon>
        </Flex>
        <Flex
          gap="16px"
          direction="column"
          width="527px"
          height="unset"
          justifyContent="center"
          alignItems="center"
          grow="1"
          shrink="1"
          basis="0"
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
            {...getOverrideProps(overrides, "Heading")}
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
              children="Welcome!"
              {...getOverrideProps(overrides, "Welcome!")}
            ></Text>
          </Flex>
          <Flex
            gap="16px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            grow="1"
            shrink="1"
            basis="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 26086259")}
          >
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
                size="default"
                isDisabled={false}
                variation="link"
                children="Forgot password"
                {...getOverrideProps(overrides, "Button911346")}
              ></Button>
            </Flex>
          </Flex>
          <Flex
            gap="16px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            grow="1"
            shrink="1"
            basis="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 26086260")}
          >
            <Button
              width="unset"
              height="40px"
              shrink="0"
              alignSelf="stretch"
              size="default"
              isDisabled={false}
              variation="primary"
              children="Login"
              {...getOverrideProps(overrides, "Button911348")}
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
                {...getOverrideProps(overrides, "Button911351")}
              ></Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
