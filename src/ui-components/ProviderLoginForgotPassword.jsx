/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Text, TextField } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function ProviderLoginForgotPassword(props) {
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
      {...getOverrideProps(overrides, "ProviderLoginForgotPassword")}
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
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="16px 0px 16px 0px"
        {...getOverrideProps(overrides, "Frame 26086262911419")}
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
          {...getOverrideProps(overrides, "Frame 26086262911422")}
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
          padding="60px 60px 60px 60px"
          {...getOverrideProps(overrides, "Frame 1")}
        >
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
              children="Forgot Password"
              {...getOverrideProps(overrides, "Forgot Password")}
            ></Text>
            <Text
              fontFamily="Roboto"
              fontSize="14px"
              fontWeight="400"
              color="rgba(128,128,128,1)"
              lineHeight="21.90999984741211px"
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
              children="Please enter your Email, When creating your account We ‘ll send you link to reset your password."
              {...getOverrideProps(
                overrides,
                "Please enter your Email, When creating your account We \u2018ll send you link to reset your password."
              )}
            ></Text>
          </Flex>
          <TextField
            width="unset"
            height="unset"
            label="Email"
            placeholder="Email"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            size="small"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField")}
          ></TextField>
          <Flex
            gap="16px"
            direction="column"
            width="unset"
            height="88px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 26086261")}
          >
            <Button
              width="unset"
              height="40px"
              shrink="0"
              alignSelf="stretch"
              size="default"
              isDisabled={false}
              variation="primary"
              children="SEND"
              {...getOverrideProps(overrides, "Button911430")}
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
              <Button
                width="unset"
                height="unset"
                shrink="0"
                size="small"
                isDisabled={false}
                variation="link"
                children="Back to Login"
                {...getOverrideProps(overrides, "Button911432")}
              ></Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
