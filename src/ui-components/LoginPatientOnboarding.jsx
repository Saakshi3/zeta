/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
/* eslint-disable */
import * as React from "react";
import 'fontsource-inter/500.css'; // Import the specific weight you want to use'
import 'fontsource-inter/400.css'; // Import the specific weight you want to use
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Heading, Image, Text, View } from "@aws-amplify/ui-react";
import bgImage from "../images/doctor.png";
import './Button.css'

export default function LoginPatientOnboarding02(props) {
  const { overrides, ...rest } = props;
  return (
    // Background Image Code
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'block',
        gap: 'unset',
        alignItems: 'unset',
        justifyContent: 'unset',
        overflow: 'hidden',
        position: 'relative',
        padding: '0px 0px 0px 0px',
        backgroundImage: `url(${bgImage})`, // Use the imported image
        backgroundSize: 'cover', // Optionally, set the background size
        backgroundRepeat: 'no-repeat'
      }}
      {...getOverrideProps(overrides, "LoginPatientOnboarding")}
      {...rest}
    >

    {/* Pseudo-element for the color overlay */}
    <div
      style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(63, 81, 181, 0.6)', // Blue color with opacity
      }}
    ></div>

    {/* The main container (white box) */}
    <Flex
        gap="16px"
        direction="column"
        width="512px"
        height="414px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="calc(50% - 207px - 0px)"
        left="calc(50% - 256px - 0px)"
        boxShadow="0px 2px 2px rgba(0, 0, 0, 0.10000000149011612)"
        borderRadius="12px"
        padding="60px 60px 60px 60px"
        backgroundColor="rgba(250,250,250,1)"
        {...getOverrideProps(overrides, "Frame 1")}
      >

      {/* The space between the elements   */}
      <Flex
        gap="0"
        direction="column"
        width="unset"
        height="190px"
        justifyContent="space-between"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Heading")}
      >

        {/* Main heading of the splash screen */}
        <Heading
        fontFamily="'Inter'"
        wordWrap='break-word'
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
        children="Welcome to &#xA;Best-in-Class eConsent"
        {...getOverrideProps(
          overrides,
          "Welcome to Best-in-Class eConsent"
        )}
        ></Heading>

          {/* Subheading of the splash screen */}
          <Text
            fontFamily="'Inter'"
            fontSize="16px"
            fontWeight="400"
            wordWrap='break-word'
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
            children="Seamlessly manage consent, protect your&#xA; 
            privacy, and follow the best procedures."
            {...getOverrideProps(
              overrides,
              "Seamlessly manage consent, protect your privacy, and follow the best procedures."
            )}
          ></Text>
        </Flex>

        {/* To add the white spacing between button and subheading */}
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-end"
          alignItems="center"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "CTA")}
        >
        
        {/* Button to start using the product */}
        <Button className="button-primary"
            width="unset"
            height="40px"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            variation="primary"
            style={{
              backgroundColor: '#043495'
              }}
            children="NEXT"  
          ></Button>
        </Flex>
      </Flex>
    </div>
  );
}
