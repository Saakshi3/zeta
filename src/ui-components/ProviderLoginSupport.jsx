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
  Flex,
  Text,
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
export default function ProviderLoginSupport(props) {
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
      {...getOverrideProps(overrides, "ProviderLoginSupport")}
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
          gap="16px"
          direction="column"
          width="527px"
          height="unset"
          justifyContent="flex-start"
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
              children="Help & Support"
              {...getOverrideProps(overrides, "Help & Support")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="14px"
              fontWeight="400"
              color="rgba(128,128,128,1)"
              lineHeight="21px"
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
              children="Have a question or need assistance? We're here to help! Please use the form below to send us a message, and our support team will get back to you as soon as possible."
              {...getOverrideProps(
                overrides,
                "Have a question or need assistance? We're here to help! Please use the form below to send us a message, and our support team will get back to you as soon as possible."
              )}
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
              label="Email*"
              placeholder="Email"
              shrink="0"
              alignSelf="stretch"
              size="small"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              {...getOverrideProps(overrides, "TextField911183")}
            ></TextField>
            <TextField
              width="unset"
              height="unset"
              label="Name"
              placeholder="Name"
              shrink="0"
              alignSelf="stretch"
              size="small"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              {...getOverrideProps(overrides, "TextField911184")}
            ></TextField>
            <TextField
              width="unset"
              height="unset"
              label="Subject*"
              placeholder="Name"
              shrink="0"
              alignSelf="stretch"
              size="small"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              {...getOverrideProps(overrides, "TextField911185")}
            ></TextField>
            <TextAreaField
              width="unset"
              height="unset"
              label="Message"
              shrink="0"
              alignSelf="stretch"
              placeholder="Placeholder"
              size="small"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              {...getOverrideProps(overrides, "TextAreaField")}
            ></TextAreaField>
          </Flex>
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
              children="SEND"
              {...getOverrideProps(overrides, "Button911188")}
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
                {...getOverrideProps(overrides, "Button911190")}
              ></Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
