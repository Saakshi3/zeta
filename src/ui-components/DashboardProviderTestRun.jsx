/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import NavBarHeader from "./NavBarHeader";
import SideBar from "./SideBar";
import {
  Alert,
  Divider,
  Flex,
  Heading,
  SearchField,
  SelectField,
  Text,
} from "@aws-amplify/ui-react";
import ItemCard from "./ItemCard";
import DataRow from "./DataRow";
export default function DashboardProviderTestRun(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="1280px"
      height="832px"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "DashboardProviderTestRun")}
      {...rest}
    >
      <NavBarHeader
        display="flex"
        gap="40px"
        direction="row"
        width="unset"
        height="64px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        boxShadow="0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
        padding="24px 32px 24px 32px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "NavBarHeader")}
      ></NavBarHeader>
      <Flex
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "main")}
      >
        <SideBar
          display="flex"
          gap="10px"
          direction="row"
          width="72px"
          height="unset"
          justifyContent="center"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="32px 0px 32px 0px"
          backgroundColor="rgba(230,238,254,1)"
          {...getOverrideProps(overrides, "SideBar")}
        ></SideBar>
        <Flex
          gap="0"
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
          {...getOverrideProps(overrides, "Body")}
        >
          <Flex
            gap="16px"
            direction="row"
            width="unset"
            height="355px"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="16px 16px 16px 16px"
            {...getOverrideProps(overrides, "Div 1")}
          >
            <Flex
              gap="16px"
              direction="column"
              width="714px"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Overview38825798")}
            >
              <Flex
                gap="32px"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="center"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                backgroundColor="rgba(255,255,255,1)"
                {...getOverrideProps(overrides, "Header Title")}
              >
                <Flex
                  gap="16px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  shrink="0"
                  alignSelf="stretch"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  {...getOverrideProps(overrides, "Frame 31338805786")}
                >
                  <Flex
                    gap="4px"
                    direction="column"
                    width="unset"
                    height="unset"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    {...getOverrideProps(overrides, "Frame 2608614538805797")}
                  >
                    <Heading
                      width="unset"
                      height="unset"
                      shrink="0"
                      level="4"
                      children="Dashboard"
                      {...getOverrideProps(overrides, "Heading38805792")}
                    ></Heading>
                  </Flex>
                </Flex>
              </Flex>
              <Flex
                gap="16px"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                grow="1"
                shrink="1"
                basis="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Overview38464457")}
              >
                <Heading
                  width="unset"
                  height="unset"
                  shrink="0"
                  alignSelf="stretch"
                  level="6"
                  children="Overview"
                  {...getOverrideProps(overrides, "Heading38464453")}
                ></Heading>
                <Flex
                  gap="27px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  grow="1"
                  shrink="1"
                  basis="0"
                  alignSelf="stretch"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  {...getOverrideProps(overrides, "Frame 26086147")}
                >
                  <ItemCard
                    display="flex"
                    gap="16px"
                    direction="row"
                    width="unset"
                    height="unset"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    grow="1"
                    shrink="1"
                    basis="0"
                    alignSelf="stretch"
                    position="relative"
                    boxShadow="0px 2px 2px rgba(0, 0, 0, 0.10000000149011612)"
                    borderRadius="8px"
                    padding="8px 8px 8px 22px"
                    backgroundColor="rgba(255,255,255,1)"
                    type="Default"
                    {...getOverrideProps(overrides, "ItemCard38464560")}
                  ></ItemCard>
                  <ItemCard
                    display="flex"
                    gap="16px"
                    direction="row"
                    width="unset"
                    height="unset"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    grow="1"
                    shrink="1"
                    basis="0"
                    alignSelf="stretch"
                    position="relative"
                    boxShadow="0px 2px 2px rgba(0, 0, 0, 0.10000000149011612)"
                    borderRadius="8px"
                    padding="8px 8px 8px 22px"
                    backgroundColor="rgba(255,255,255,1)"
                    type="Default"
                    {...getOverrideProps(overrides, "ItemCard38854839")}
                  ></ItemCard>
                </Flex>
                <Flex
                  gap="27px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  grow="1"
                  shrink="1"
                  basis="0"
                  alignSelf="stretch"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  {...getOverrideProps(overrides, "Frame 26086148")}
                >
                  <ItemCard
                    display="flex"
                    gap="16px"
                    direction="row"
                    width="unset"
                    height="unset"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    grow="1"
                    shrink="1"
                    basis="0"
                    alignSelf="stretch"
                    position="relative"
                    boxShadow="0px 2px 2px rgba(0, 0, 0, 0.10000000149011612)"
                    borderRadius="8px"
                    padding="8px 8px 8px 22px"
                    backgroundColor="rgba(255,255,255,1)"
                    type="example3"
                    {...getOverrideProps(overrides, "ItemCard38464576")}
                  ></ItemCard>
                  <ItemCard
                    display="flex"
                    gap="16px"
                    direction="row"
                    width="unset"
                    height="unset"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    grow="1"
                    shrink="1"
                    basis="0"
                    alignSelf="stretch"
                    position="relative"
                    boxShadow="0px 2px 2px rgba(0, 0, 0, 0.10000000149011612)"
                    borderRadius="8px"
                    padding="8px 8px 8px 22px"
                    backgroundColor="rgba(255,255,255,1)"
                    type="Type4"
                    {...getOverrideProps(overrides, "ItemCard38464584")}
                  ></ItemCard>
                </Flex>
              </Flex>
            </Flex>
            <Flex
              gap="52px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              overflow="hidden"
              grow="1"
              shrink="1"
              basis="0"
              alignSelf="stretch"
              position="relative"
              boxShadow="0px 2px 2px rgba(0, 0, 0, 0.10000000149011612)"
              borderRadius="8px"
              padding="8px 8px 8px 8px"
              backgroundColor="rgba(250,250,250,1)"
              {...getOverrideProps(overrides, "Notification")}
            >
              <Flex
                gap="4px"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                grow="1"
                shrink="1"
                basis="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Notifications")}
              >
                <Heading
                  width="unset"
                  height="unset"
                  padding="0px 0px 8px 0px"
                  shrink="0"
                  alignSelf="stretch"
                  level="5"
                  children="Notifications"
                  {...getOverrideProps(overrides, "Heading38464503")}
                ></Heading>
                <Divider
                  width="unset"
                  height="1px"
                  shrink="0"
                  alignSelf="stretch"
                  size="small"
                  orientation="horizontal"
                  {...getOverrideProps(overrides, "Divider38854835")}
                ></Divider>
                <Text
                  fontFamily="Inter"
                  fontSize="12px"
                  fontWeight="400"
                  color="rgba(92,102,112,1)"
                  lineHeight="18px"
                  textAlign="right"
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
                  children="2nd December 2021"
                  {...getOverrideProps(overrides, "2nd December 2021")}
                ></Text>
                <Divider
                  width="unset"
                  height="1px"
                  shrink="0"
                  alignSelf="stretch"
                  size="small"
                  orientation="horizontal"
                  {...getOverrideProps(overrides, "Divider38854837")}
                ></Divider>
                <Flex
                  gap="8px"
                  direction="column"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  overflow="hidden"
                  grow="1"
                  shrink="1"
                  basis="0"
                  alignSelf="stretch"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  {...getOverrideProps(overrides, "Frame 26086149")}
                >
                  <Alert
                    width="unset"
                    height="unset"
                    heading="Success"
                    overflow="hidden"
                    shrink="0"
                    alignSelf="stretch"
                    variation="success"
                    isDismissible={true}
                    hasIcon={true}
                    children="Ronald Richardson received PHI form: 8932.245 "
                    {...getOverrideProps(overrides, "Alert38464409")}
                  ></Alert>
                  <Alert
                    width="unset"
                    height="unset"
                    heading="Error"
                    overflow="hidden"
                    shrink="0"
                    alignSelf="stretch"
                    variation="error"
                    isDismissible={true}
                    hasIcon={true}
                    children="Sarah Jane’s  PHI form: 4332.245 expires in 3 days "
                    {...getOverrideProps(overrides, "Alert38464418")}
                  ></Alert>
                  <Alert
                    width="unset"
                    height="unset"
                    heading="Warning"
                    overflow="hidden"
                    shrink="0"
                    alignSelf="stretch"
                    variation="warning"
                    isDismissible={true}
                    hasIcon={true}
                    children="Mary Scott requested support for PHI form: 7432.245 "
                    {...getOverrideProps(overrides, "Alert38464427")}
                  ></Alert>
                  <Alert
                    width="unset"
                    height="unset"
                    heading="Warning"
                    overflow="hidden"
                    shrink="0"
                    alignSelf="stretch"
                    variation="warning"
                    isDismissible={true}
                    hasIcon={true}
                    children="Mary Scott requested support for PHI form: 7432.245 "
                    {...getOverrideProps(overrides, "Alert38845834")}
                  ></Alert>
                  <Alert
                    width="unset"
                    height="unset"
                    heading="Warning"
                    overflow="hidden"
                    shrink="0"
                    alignSelf="stretch"
                    variation="warning"
                    isDismissible={true}
                    hasIcon={true}
                    children="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
                    {...getOverrideProps(overrides, "Alert38845807")}
                  ></Alert>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            gap="0"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            grow="1"
            shrink="1"
            basis="0"
            alignSelf="stretch"
            position="relative"
            borderRadius="8px"
            padding="0px 16px 16px 16px"
            {...getOverrideProps(overrides, "Div 2")}
          >
            <Flex
              gap="0"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              overflow="hidden"
              grow="1"
              shrink="1"
              basis="0"
              alignSelf="stretch"
              position="relative"
              borderRadius="8px"
              padding="8px 8px 8px 8px"
              backgroundColor="rgba(250,250,250,1)"
              {...getOverrideProps(overrides, "List")}
            >
              <Flex
                gap="213px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="space-between"
                alignItems="center"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="8px 0px 8px 0px"
                {...getOverrideProps(overrides, "Heading38857298")}
              >
                <Flex
                  gap="16px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  grow="1"
                  shrink="1"
                  basis="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  {...getOverrideProps(overrides, "Frame 31338857294")}
                >
                  <Flex
                    gap="4px"
                    direction="column"
                    width="unset"
                    height="unset"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    {...getOverrideProps(overrides, "Frame 2608614538857295")}
                  >
                    <Heading
                      width="unset"
                      height="unset"
                      shrink="0"
                      level="4"
                      children="All Forms"
                      {...getOverrideProps(overrides, "Heading38857296")}
                    ></Heading>
                  </Flex>
                </Flex>
                <SearchField
                  width="unset"
                  shrink="0"
                  placeholder="Placeholder"
                  size="small"
                  isDisabled={false}
                  labelHidden={true}
                  variation="default"
                  {...getOverrideProps(overrides, "SearchField")}
                ></SearchField>
              </Flex>
              <Divider
                width="unset"
                height="1px"
                shrink="0"
                alignSelf="stretch"
                size="small"
                orientation="horizontal"
                {...getOverrideProps(overrides, "Divider38464510")}
              ></Divider>
              <Flex
                gap="0"
                direction="row"
                width="unset"
                height="40px"
                justifyContent="flex-start"
                alignItems="center"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Heading38848475")}
              >
                <SelectField
                  width="60px"
                  shrink="0"
                  size="small"
                  isDisabled={true}
                  labelHidden={true}
                  variation="default"
                  {...getOverrideProps(overrides, "SelectField38848476")}
                ></SelectField>
                <SelectField
                  width="122px"
                  placeholder="Name/ID"
                  shrink="0"
                  size="small"
                  isDisabled={true}
                  labelHidden={true}
                  variation="default"
                  {...getOverrideProps(overrides, "SelectField38869193")}
                ></SelectField>
                <SelectField
                  width="176px"
                  placeholder="Procedure"
                  shrink="0"
                  size="small"
                  isDisabled={true}
                  labelHidden={true}
                  variation="default"
                  {...getOverrideProps(overrides, "SelectField38848477")}
                ></SelectField>
                <SelectField
                  width="102px"
                  placeholder="Status"
                  shrink="0"
                  size="small"
                  isDisabled={true}
                  labelHidden={true}
                  variation="default"
                  {...getOverrideProps(overrides, "SelectField38848478")}
                ></SelectField>
                <SelectField
                  width="145px"
                  placeholder="Date"
                  shrink="0"
                  size="small"
                  isDisabled={true}
                  labelHidden={true}
                  variation="default"
                  {...getOverrideProps(overrides, "SelectField38848479")}
                ></SelectField>
                <SelectField
                  width="241px"
                  placeholder="Latest activity"
                  shrink="0"
                  size="small"
                  isDisabled={true}
                  labelHidden={true}
                  variation="default"
                  {...getOverrideProps(overrides, "SelectField38848480")}
                ></SelectField>
                <SelectField
                  width="177px"
                  placeholder="Practitioner"
                  shrink="0"
                  size="small"
                  isDisabled={true}
                  labelHidden={true}
                  variation="default"
                  {...getOverrideProps(overrides, "SelectField38848481")}
                ></SelectField>
                <SelectField
                  width="63px"
                  shrink="0"
                  size="small"
                  isDisabled={true}
                  labelHidden={true}
                  variation="default"
                  {...getOverrideProps(overrides, "SelectField38848482")}
                ></SelectField>
              </Flex>
              <Divider
                width="unset"
                height="1px"
                shrink="0"
                alignSelf="stretch"
                size="small"
                orientation="horizontal"
                {...getOverrideProps(overrides, "Divider38464512")}
              ></Divider>
              <Flex
                gap="0"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                overflow="hidden"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="8px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 26086151")}
              >
                <DataRow
                  display="flex"
                  gap="16px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="center"
                  overflow="hidden"
                  shrink="0"
                  alignSelf="stretch"
                  position="relative"
                  border="1px SOLID rgba(220,222,224,1)"
                  padding="7px 7px 7px 7px"
                  backgroundColor="rgba(255,255,255,1)"
                  {...getOverrideProps(overrides, "DataRow38464509")}
                ></DataRow>
                <DataRow
                  display="flex"
                  gap="16px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="center"
                  overflow="hidden"
                  shrink="0"
                  alignSelf="stretch"
                  position="relative"
                  border="1px SOLID rgba(220,222,224,1)"
                  padding="7px 7px 7px 7px"
                  backgroundColor="rgba(255,255,255,1)"
                  {...getOverrideProps(overrides, "DataRow38464511")}
                ></DataRow>
                <DataRow
                  display="flex"
                  gap="16px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="center"
                  overflow="hidden"
                  shrink="0"
                  alignSelf="stretch"
                  position="relative"
                  border="1px SOLID rgba(220,222,224,1)"
                  padding="7px 7px 7px 7px"
                  backgroundColor="rgba(255,255,255,1)"
                  {...getOverrideProps(overrides, "DataRow38464513")}
                ></DataRow>
                <DataRow
                  display="flex"
                  gap="16px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="center"
                  overflow="hidden"
                  shrink="0"
                  alignSelf="stretch"
                  position="relative"
                  border="1px SOLID rgba(220,222,224,1)"
                  padding="7px 7px 7px 7px"
                  backgroundColor="rgba(255,255,255,1)"
                  {...getOverrideProps(overrides, "DataRow38857117")}
                ></DataRow>
                <DataRow
                  display="flex"
                  gap="16px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="center"
                  overflow="hidden"
                  shrink="0"
                  alignSelf="stretch"
                  position="relative"
                  border="1px SOLID rgba(220,222,224,1)"
                  padding="7px 7px 7px 7px"
                  backgroundColor="rgba(255,255,255,1)"
                  {...getOverrideProps(overrides, "DataRow38857137")}
                ></DataRow>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
