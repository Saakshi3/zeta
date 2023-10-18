/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Image, Text, View } from "@aws-amplify/ui-react";
import bgImage from "../images/doctor.png";
export default function LoginPatientSplash(props) {
  const { overrides, ...rest } = props;
  return (
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
        backgroundSize: 'cover', // Zoom out by using 100% 100%
        backgroundRepeat: 'no-repeat'
      }}
      {...getOverrideProps(overrides, "LoginPatientOnboarding")}
      {...rest}
    >
    <div
      style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(63, 81, 181, 0.6)' // Blue color with opacity
      }}></div>
      
      <View
        padding="0px 0px 0px 0px"
        width="100%"
        height="100vh"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        {...getOverrideProps(overrides, "Group 26086145")}
      >
        <View
          padding="0px 0px 0px 0px"
          width="164px"
          height="209px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="calc(50% - 104.5px - -0.5px)"
          left="calc(50% - 82px - 0px)"
          {...getOverrideProps(overrides, "Group 416")}
        >
          <View
            padding="0px 0px 0px 0px"
            width="164px"
            height="120px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="89px"
            left="calc(50% - 82px - 0px)"
            {...getOverrideProps(overrides, "Group 414")}
          >
            <Text
              fontFamily="Inter"
              fontSize="34px"
              fontWeight="700"
              color="rgba(255,255,255,1)"
              lineHeight="40px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.1px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="0px"
              left="0px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Zeta&#xA;eConsent&#xA;System"
              {...getOverrideProps(overrides, "Zeta eConsent System")}
            ></Text>
          </View>
          <View
            padding="0px 0px 0px 0px"
            width="66px"
            height="78px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="calc(50% - 33px - 0px)"
            {...getOverrideProps(overrides, "Group 417")}
          >
            <View
              width="66px"
              height="78px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0px"
              left="0px"
              borderRadius="8px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(248,247,255,0.9)"
              {...getOverrideProps(overrides, "Rectangle 78")}
            ></View>
            <View
              padding="0px 0px 0px 0px"
              width="32px"
              height="47px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="15px"
              left="17px"
              {...getOverrideProps(overrides, "Group 415")}
            >
              <Icon
                width="32px"
                height="47px"
                viewBox={{ minX: 0, minY: 0, width: 32, height: 47 }}
                paths={[
                  {
                    d: "M0 47L-1 47L-1 48L0 48L0 47ZM0 40.42L-0.835822 39.871L-1 40.121L-1 40.42L0 40.42ZM21.8305 7.18428L22.6663 7.73328L23.6838 6.18428L21.8305 6.18428L21.8305 7.18428ZM0.20339 7.18428L-0.79661 7.18428L-0.79661 8.18428L0.20339 8.18428L0.20339 7.18428ZM0.20339 0L0.20339 -1L-0.79661 -1L-0.79661 0L0.20339 0ZM31.8644 0L32.8644 0L32.8644 -1L31.8644 -1L31.8644 0ZM31.8644 6.58L32.6987 7.13137L32.8644 6.8806L32.8644 6.58L31.8644 6.58ZM9.8983 39.8157L9.06405 39.2643L8.03871 40.8157L9.8983 40.8157L9.8983 39.8157ZM32 39.8157L33 39.8157L33 38.8157L32 38.8157L32 39.8157ZM32 47L32 48L33 48L33 47L32 47ZM1 47L1 40.42L-1 40.42L-1 47L1 47ZM0.835822 40.969L22.6663 7.73328L20.9947 6.63528L-0.835822 39.871L0.835822 40.969ZM21.8305 6.18428L0.20339 6.18428L0.20339 8.18428L21.8305 8.18428L21.8305 6.18428ZM1.20339 7.18428L1.20339 0L-0.79661 0L-0.79661 7.18428L1.20339 7.18428ZM0.20339 1L31.8644 1L31.8644 -1L0.20339 -1L0.20339 1ZM30.8644 0L30.8644 6.58L32.8644 6.58L32.8644 0L30.8644 0ZM31.0301 6.02862L9.06405 39.2643L10.7326 40.3671L32.6987 7.13137L31.0301 6.02862ZM9.8983 40.8157L32 40.8157L32 38.8157L9.8983 38.8157L9.8983 40.8157ZM31 39.8157L31 47L33 47L33 39.8157L31 39.8157ZM32 46L0 46L0 48L32 48L32 46Z",
                    stroke: "rgba(63,81,181,1)",
                    fillRule: "nonzero",
                    strokeWidth: 1,
                  },
                  {
                    d: "M0 47L0 40.42L21.8305 7.18428L0.20339 7.18428L0.20339 0L31.8644 0L31.8644 6.58L9.8983 39.8157L32 39.8157L32 47L0 47Z",
                    fill: "rgba(63,81,181,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0px"
                left="0px"
                {...getOverrideProps(overrides, "Z Logo")}
              ></Icon>
            </View>
          </View>
        </View>
      </View>
  </div>
  );
}
