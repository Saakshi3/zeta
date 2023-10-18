/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import 'fontsource-inter/400.css';
import 'fontsource-inter/500.css';
import LogoWithText from "./LogoWithText";
import {
  Button,
  Flex,
  Icon,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function LoginPatientForgotPassword(props) {
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
      {...getOverrideProps(overrides, "LoginPatientForgotPassword")}
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
        <TextField
          width="unset"
          height="unset"
          label="Email"
          placeholder="sarah@ABC.com"
          alignItems="left"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          size="small"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField")}
        ></TextField>
        <Flex
          gap="10px"
          direction="row"
          width="409px"
          height="unset"
          justifyContent="center"
          alignItems="center"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="16px 16px 16px 16px"
          {...getOverrideProps(overrides, "Frame 26086146")}
        >
          <View
            width="330px"
            height="258px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(
              overrides,
              "undraw_forgot_password_re_hxwm (2) 1"
            )}
          >
            <Icon
              width="69.14px"
              height="119.56px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 69.138671875,
                height: 119.564453125,
              }}
              paths={[
                {
                  d: "M13.4199 39.7584C24.7291 16.3545 46.3015 -1.61584 69.1377 0.115327C52.2931 21.6649 42.4706 49.5294 41.4081 78.7787C41.0332 90.0606 41.6147 102.655 35.2472 111.103C31.2853 116.359 25.2294 118.905 19.2751 119.439C13.3206 119.973 7.3674 118.707 1.49243 117.447L0.0672891 117.962C-0.475269 91.048 2.11073 63.1623 13.4199 39.7584Z",
                  fill: "rgba(240,240,240,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="42.14%"
              bottom="11.52%"
              left="31.8%"
              right="47.25%"
              {...getOverrideProps(overrides, "Vector658743")}
            ></Icon>
            <Icon
              width="69.49px"
              height="117.83px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 69.48828125,
                height: 117.833251953125,
              }}
              paths={[
                {
                  d: "M69.1824 1.18284C52.2953 10.7466 37.896 26.719 29.0566 46.1987C27.1456 50.4101 25.5185 54.878 24.8088 59.6019C24.0987 64.328 24.5947 68.8268 25.9668 73.3155C27.2212 77.4191 28.9083 81.4458 29.2929 85.8367C29.6984 90.4649 28.2509 94.7924 25.6452 98.2269C22.4572 102.429 18.1757 105.033 13.9136 107.408C9.18139 110.046 4.23055 112.697 0.878784 117.619C0.472669 118.215 -0.290204 117.439 0.115297 116.844C5.9468 108.28 15.9289 106.67 22.8509 99.7716C26.0809 96.5526 28.5058 92.169 28.3528 87.0327C28.2189 82.5411 26.4822 78.387 25.1816 74.2449C23.8159 69.8957 23.1348 65.5226 23.6246 60.8857C24.1256 56.1423 25.6076 51.5902 27.4187 47.3397C31.5033 37.7539 37.0931 28.9534 43.4966 21.3459C50.856 12.6013 59.4328 5.40222 68.8558 0.0600698C69.4391 -0.270294 69.7619 0.854636 69.1824 1.18284Z",
                  fill: "rgba(255,255,255,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="41.95%"
              bottom="12.38%"
              left="31.8%"
              right="47.14%"
              {...getOverrideProps(overrides, "Vector658744")}
            ></Icon>
            <Icon
              width="6.39px"
              height="20.47px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 6.392578125,
                height: 20.471923828125,
              }}
              paths={[
                {
                  d: "M5.54017 20.351C2.95134 18.1241 1.11966 14.8871 0.372281 11.2181C-0.375102 7.54903 0.0104738 3.68693 1.46013 0.32147C1.75545 -0.358312 2.66724 0.149616 2.37153 0.830304C1.01669 3.96129 0.657839 7.55888 1.35974 10.9738C2.06163 14.3887 3.77805 17.396 6.19919 19.4528C6.72489 19.9005 6.06286 20.7962 5.54017 20.351Z",
                  fill: "rgba(255,255,255,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="49.44%"
              bottom="42.62%"
              left="39.71%"
              right="58.35%"
              {...getOverrideProps(overrides, "Vector658745")}
            ></Icon>
            <Icon
              width="17.83px"
              height="12.47px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 17.826171875,
                height: 12.467529296875,
              }}
              paths={[
                {
                  d: "M0.446044 11.2772C6.93309 10.1621 12.8245 6.21155 16.9457 0.213298C17.3535 -0.381382 18.1165 0.39463 17.7091 0.988592C13.4107 7.2211 7.27265 11.3176 0.51991 12.4605C-0.123785 12.5689 -0.194157 11.385 0.446044 11.2772Z",
                  fill: "rgba(255,255,255,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="65.22%"
              bottom="29.94%"
              left="39.27%"
              right="55.33%"
              {...getOverrideProps(overrides, "Vector658746")}
            ></Icon>
            <Icon
              width="8.19px"
              height="4.3px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 8.185546875,
                height: 4.304443359375,
              }}
              paths={[
                {
                  d: "M0.827214 0.142953C1.67627 1.25015 2.74579 2.09193 3.93973 2.59269C5.13367 3.09344 6.41465 3.23749 7.66761 3.01191C8.30982 2.89396 8.37949 4.07805 7.74146 4.19524C6.35616 4.43689 4.94162 4.27577 3.62146 3.72595C2.3013 3.17613 1.11568 2.25434 0.16819 1.04113C0.0707329 0.935576 0.0111022 0.790331 0.00140097 0.63491C-0.00830022 0.479489 0.0326478 0.32556 0.115953 0.204393C0.203719 0.0859877 0.327677 0.0131072 0.460859 0.00160211C0.59404 -0.00990297 0.725687 0.0408999 0.827214 0.142953Z",
                  fill: "rgba(255,255,255,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="47.34%"
              bottom="50.99%"
              left="47.11%"
              right="50.41%"
              {...getOverrideProps(overrides, "Vector658747")}
            ></Icon>
            <Icon
              width="115.46px"
              height="77.58px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 115.455078125,
                height: 77.58203125,
              }}
              paths={[
                {
                  d: "M115.455 14.7448C115.056 14.8319 114.657 14.919 114.254 15.0151C108.892 16.2185 103.622 17.9323 98.4955 20.1397C98.0969 20.303 97.695 20.4755 97.3012 20.6519C84.9991 26.125 73.6677 34.2374 63.8829 44.5768C59.9925 48.6953 56.3741 53.1561 53.0591 57.9204C48.4811 64.5004 43.9625 72.0634 37.9802 76.3537C37.3604 76.8096 36.7171 77.2198 36.0541 77.5821L1.59213 60.7658C1.53011 60.6813 1.46445 60.6059 1.40206 60.5213L0 59.9238C0.156387 59.6641 0.323335 59.3986 0.479722 59.1389C0.56992 58.9877 0.667741 58.8403 0.757939 58.6892C0.820495 58.5896 0.883461 58.4902 0.935072 58.3962C0.955786 58.3629 0.976888 58.3299 0.994359 58.3059C1.04597 58.2118 1.10239 58.1309 1.15074 58.0461C2.08042 56.5592 3.0206 55.0774 3.97128 53.6007C3.97454 53.5914 3.97455 53.5914 3.9855 53.5859C11.2536 42.3559 19.3825 31.7411 28.6225 22.9151C28.9006 22.6497 29.1815 22.3748 29.4754 22.1171C33.6591 18.166 38.1103 14.6237 42.7846 11.5257C45.3487 9.83906 47.9838 8.30617 50.6796 6.93296C57.6512 3.40053 65.0517 1.18011 72.6097 0.353121C87.6768 -1.29284 103.024 2.7484 114.58 13.8839C114.875 14.169 115.163 14.4504 115.455 14.7448Z",
                  fill: "rgba(240,240,240,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="65.09%"
              bottom="4.84%"
              left="31.54%"
              right="33.48%"
              {...getOverrideProps(overrides, "Vector658748")}
            ></Icon>
            <Icon
              width="115.38px"
              height="50.35px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 115.376953125,
                height: 50.34765625,
              }}
              paths={[
                {
                  d: "M114.717 3.21519C96.3394 -1.10969 76.6681 1.44451 59.6411 10.7371C55.9599 12.7461 52.3743 15.161 49.39 18.4301C46.4043 21.7007 44.498 25.644 43.2963 30.1999C42.1977 34.3649 41.484 38.7749 39.544 42.5532C37.4991 46.5357 34.1286 48.9658 30.2905 49.8625C25.5944 50.9596 20.8432 50.0063 16.2246 48.884C11.0964 47.638 5.78663 46.2481 0.59136 47.8042C-0.038118 47.9927 -0.249989 46.8326 0.378539 46.6444C9.41741 43.9371 18.2114 49.7219 27.2688 49.1167C31.4951 48.8342 35.6747 47.0517 38.1812 42.8422C40.373 39.1612 41.1123 34.6143 42.1937 30.3858C43.3291 25.9459 45.0233 21.9718 47.7875 18.6164C50.6151 15.1839 54.128 12.599 57.7494 10.4881C65.9165 5.72739 74.8836 2.65993 83.8897 1.12127C94.2411 -0.648161 104.773 -0.321398 115.031 2.0874C115.666 2.2368 115.348 3.36362 114.717 3.21519Z",
                  fill: "rgba(255,255,255,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="69.74%"
              bottom="10.74%"
              left="31.68%"
              right="33.36%"
              {...getOverrideProps(overrides, "Vector658749")}
            ></Icon>
            <Icon
              width="8.31px"
              height="19.38px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 8.306640625,
                height: 19.383056640625,
              }}
              paths={[
                {
                  d: "M0.577582 18.9469C-0.349765 15.3351 -0.155621 11.4532 1.12536 7.99436C2.40634 4.53549 4.69074 1.72491 7.57058 0.064561C8.15426 -0.269043 8.62234 0.782335 8.03787 1.11638C5.35374 2.65667 3.22604 5.27497 2.03879 8.49874C0.85154 11.7225 0.682958 15.3394 1.56345 18.6965C1.75406 19.4263 0.7671 19.6725 0.577582 18.9469Z",
                  fill: "rgba(255,255,255,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="65.25%"
              bottom="27.23%"
              left="51.22%"
              right="46.27%"
              {...getOverrideProps(overrides, "Vector658750")}
            ></Icon>
            <Icon
              width="20.21px"
              height="5.03px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 20.21484375,
                height: 5.030029296875,
              }}
              paths={[
                {
                  d: "M0.78673 0.0800596C6.53696 3.78443 13.2627 4.80299 19.623 2.93266C20.253 2.74675 20.4651 3.90678 19.8358 4.09246C13.2141 6.02424 6.21671 4.94753 0.240098 1.0772C-0.329342 0.70785 0.220381 -0.287296 0.78673 0.0800596Z",
                  fill: "rgba(255,255,255,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="80.56%"
              bottom="17.49%"
              left="44.66%"
              right="49.21%"
              {...getOverrideProps(overrides, "Vector658751")}
            ></Icon>
            <Icon
              width="5.23px"
              height="8.68px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 5.23046875,
                height: 8.677001953125,
              }}
              paths={[
                {
                  d: "M0.994349 0.467505C1.10563 1.95292 1.52878 3.38257 2.2258 4.62805C2.92281 5.87353 3.87187 6.89586 4.98773 7.60321C5.56087 7.96389 5.01051 8.95868 4.4411 8.60035C3.21134 7.8121 2.16437 6.68155 1.39168 5.30749C0.618992 3.93343 0.144106 2.35766 0.00848112 0.717874C-0.0153131 0.564569 0.0113883 0.406367 0.0831835 0.2754C0.154979 0.144434 0.266469 0.0505423 0.394994 0.0128008C0.525668 -0.0195759 0.661933 0.0100324 0.774159 0.0951776C0.886386 0.180323 0.965515 0.314111 0.994349 0.467505Z",
                  fill: "rgba(255,255,255,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="69.9%"
              bottom="26.74%"
              left="59.83%"
              right="38.58%"
              {...getOverrideProps(overrides, "Vector658752")}
            ></Icon>
            <Icon
              width="155.93px"
              height="118.12px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 155.935546875,
                height: 118.12158203125,
              }}
              paths={[
                {
                  d: "M153.878 70.5341C149.052 43.0809 143.019 33.928 143.019 33.928L140.714 31.8254L137.943 29.2927L137.956 28.967L137.299 28.7042L137.144 28.563L136.891 28.3345L136.851 28.3859L136.765 28.4906L124.223 23.4753L108.311 17.117L100.943 5.85039C99.7433 4.01547 98.1984 2.53241 96.4297 1.51747C94.6609 0.502528 92.7164 -0.0167239 90.7485 0.000410682L67.2174 0.205244C64.0357 0.232945 60.9779 1.65983 58.6452 4.20537L43.1786 21.0829L19.0786 34.6236L19.0379 34.5757L18.7848 34.7884L15.0612 36.883L15.2148 37.824L12.9101 39.7804C12.9101 39.7804 6.8772 48.2971 2.05087 73.842C0.823102 80.3417 0.218751 94.2848 0.000613014 111.466C-0.010344 112.335 0.125683 113.198 0.400781 114.005C0.675878 114.812 1.08456 115.546 1.60306 116.165C2.12157 116.785 2.73955 117.277 3.42107 117.612C4.1026 117.948 4.83407 118.121 5.57295 118.122L134.296 118.122L150.362 118.122C151.1 118.121 151.831 117.948 152.512 117.613C153.194 117.277 153.811 116.786 154.33 116.168C154.848 115.549 155.257 114.816 155.532 114.01C155.808 113.204 155.944 112.341 155.934 111.473C155.721 92.7769 155.117 77.5829 153.878 70.5341Z",
                  fill: "rgba(63,81,181,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="54.22%"
              bottom="0%"
              left="0%"
              right="52.75%"
              {...getOverrideProps(overrides, "Vector658753")}
            ></Icon>
            <Icon
              width="178.49px"
              height="44.43px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 178.48828125,
                height: 44.428955078125,
              }}
              paths={[
                {
                  d: "M18.883 0C13.8749 1.15996e-14 9.07193 2.34044 5.53069 6.50645C1.98945 10.6725 0 16.3228 0 22.2144C0 28.1061 1.98945 33.7564 5.53069 37.9224C9.07193 42.0884 13.8749 44.4289 18.883 44.4289L159.606 44.4289C164.614 44.4289 169.417 42.0884 172.958 37.9224C176.499 33.7564 178.489 28.1061 178.489 22.2144C178.489 16.3228 176.499 10.6725 172.958 6.50645C169.417 2.34044 164.614 1.15996e-14 159.606 0L18.883 0Z",
                  fill: "rgba(229,229,229,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="9.28%"
              bottom="73.5%"
              left="45.91%"
              right="0%"
              {...getOverrideProps(overrides, "Vector658754")}
            ></Icon>
            <Icon
              width="170.85px"
              height="35.44px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 170.845703125,
                height: 35.437255859375,
              }}
              paths={[
                {
                  d: "M15.0614 0C11.0669 0 7.23594 1.86678 4.41138 5.18968C1.58682 8.51257 0 13.0194 3.94399e-14 17.7187C0 22.4179 1.58682 26.9247 4.41138 30.2476C7.23594 33.5705 11.0669 35.4373 15.0614 35.4373L155.784 35.4373C159.779 35.4373 163.61 33.5705 166.434 30.2476C169.259 26.9247 170.846 22.4179 170.846 17.7187C170.846 13.0194 169.259 8.51257 166.434 5.18968C163.61 1.86678 159.779 1.40049e-07 155.784 0L15.0614 0Z",
                  fill: "rgba(255,255,255,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="11.02%"
              bottom="75.24%"
              left="47.07%"
              right="1.16%"
              {...getOverrideProps(overrides, "Vector658755")}
            ></Icon>
            <Icon
              width="61.66px"
              height="72.53px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 61.65625,
                height: 72.533935546875,
              }}
              paths={[
                {
                  d: "M30.828 72.5339C47.8539 72.5339 61.6561 56.2967 61.6561 36.267C61.6561 16.2373 47.8539 0 30.828 0C13.8022 0 0 16.2373 0 36.267C0 56.2967 13.8022 72.5339 30.828 72.5339Z",
                  fill: "rgba(158,97,106,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="22.07%"
              bottom="49.81%"
              left="15.71%"
              right="65.6%"
              {...getOverrideProps(
                overrides,
                "ab6171fa-7d69-4734-b81c-8dff60f9761b"
              )}
            ></Icon>
            <Icon
              width="0.39px"
              height="1.03px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 0.39453125,
                height: 1.02685546875,
              }}
              paths={[
                {
                  d: "M0.394009 1.02691C0.262307 0.685783 0.130971 0.343482 0 0C0.0504799 0.00190185 0.100446 0.0104391 0.150908 0.0119941L0.394009 1.02691Z",
                  fill: "rgba(47,46,65,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="49.1%"
              bottom="50.5%"
              left="22.54%"
              right="77.34%"
              {...getOverrideProps(overrides, "Vector658757")}
            ></Icon>
            <Icon
              width="83.55px"
              height="85.02px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 83.546875,
                height: 85.02197265625,
              }}
              paths={[
                {
                  d: "M12.0806 17.1858C13.6398 15.7225 15.4621 14.3762 17.4556 14.4519C19.449 14.5275 21.4705 16.6456 21.0575 18.9411C24.7192 11.3141 30.5473 5.44807 37.5191 2.37264C44.4908 -0.702794 52.1606 -0.791084 59.1821 2.12327C64.1367 4.1797 68.9955 8.29377 70.1336 14.3278C70.4258 15.8768 70.4885 17.5752 71.3106 18.8331C72.3472 20.4189 74.3304 20.7777 75.9634 20.2198C75.9797 20.2142 75.996 20.2085 76.0123 20.2028C76.2882 20.092 76.586 20.0811 76.8672 20.1715C77.1484 20.262 77.4 20.4496 77.5896 20.7101C77.7792 20.9707 77.8979 21.2921 77.9305 21.6329C77.963 21.9737 77.908 22.3182 77.7723 22.6218L76.3704 25.6976C78.1376 26.161 79.9738 26.115 81.7226 25.5637C82.0132 25.474 82.3201 25.4923 82.6015 25.616C82.8828 25.7398 83.1247 25.9629 83.294 26.2547C83.4633 26.5466 83.5516 26.8929 83.547 27.2462C83.5424 27.5995 83.4449 27.9424 83.2681 28.228C78.6455 35.6942 70.9226 40.5156 63.0417 40.4589C57.4404 40.4187 51.7814 38.1477 46.33 39.663C44.2211 40.2492 42.2505 41.3835 40.5628 42.9825C38.8751 44.5815 37.5132 46.6048 36.5768 48.9038C35.6405 51.2029 35.1536 53.7193 35.1518 56.2686C35.15 58.8179 35.6334 61.3354 36.5665 63.6362C34.8918 61.4813 31.6544 61.9915 29.9414 64.1044C28.2284 66.2172 27.7849 69.3707 27.9575 72.2835C28.2214 76.7385 29.7051 80.9363 31.2693 85.0219C18.1554 84.5363 5.75179 73.7141 1.57672 59.0768C-2.61585 44.3782 1.77811 26.8544 12.0806 17.1858Z",
                  fill: "rgba(47,46,65,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="16.05%"
              bottom="51%"
              left="11.79%"
              right="62.89%"
              {...getOverrideProps(overrides, "Vector658758")}
            ></Icon>
            <Icon
              width="13.83px"
              height="55.88px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 13.833984375,
                height: 55.875732421875,
              }}
              paths={[
                {
                  d: "M0 0L8.64657 55.3443L13.8347 55.8757L0 0Z",
                  fill: "rgba(0,0,0,0.2)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="78.34%"
              bottom="0%"
              left="9.19%"
              right="86.61%"
              {...getOverrideProps(overrides, "Vector658759")}
            ></Icon>
            <Icon
              width="13.83px"
              height="60.05px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 13.833984375,
                height: 60.049560546875,
              }}
              paths={[
                {
                  d: "M13.8347 0L5.18815 59.4782L0 60.0496L13.8347 0Z",
                  fill: "rgba(0,0,0,0.2)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="76.72%"
              bottom="0%"
              left="33.86%"
              right="61.94%"
              {...getOverrideProps(overrides, "Vector658760")}
            ></Icon>
            <Icon
              width="19.33px"
              height="40.27px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 19.326171875,
                height: 40.267822265625,
              }}
              paths={[
                {
                  d: "M17.3775 39.9684C15.7196 40.7827 13.9897 39.8902 13.2642 37.8463C12.5277 35.7711 13.2156 33.6645 14.9 32.837C16.5846 32.0095 18.2837 32.9042 19.0322 35.0129C19.7694 37.0899 19.089 39.1276 17.3775 39.9684ZM14.2017 28.7523L12.8836 29.3999C12.5543 29.5597 12.1859 29.5683 11.8515 29.424C11.517 29.2797 11.2408 28.993 11.0775 28.6206L11.0123 28.4705C9.59392 25.4613 9.43152 21.804 10.5321 17.6059C11.5517 13.84 11.9752 11.1915 11.1236 8.79208C10.1389 6.0179 8.03624 5.14888 5.35489 6.40775C4.31494 6.91861 3.98401 6.91047 3.16562 7.86556C2.98759 8.07585 2.7754 8.2418 2.54168 8.35353C2.30797 8.46526 2.05752 8.52047 1.80528 8.51589C1.56143 8.51251 1.32066 8.4514 1.09732 8.33619C0.873982 8.22099 0.672651 8.05405 0.505334 7.84534C0.18299 7.44312 0.00239586 6.91199 2.36677e-05 6.3592C-0.00234852 5.80641 0.17368 5.27315 0.492556 4.86713C1.86815 3.17311 3.52728 1.83292 5.36526 0.931141C11.1263 -1.8989 14.0265 2.27925 15.3536 6.01831C16.6518 9.67553 15.9215 13.0688 14.7483 17.4635C13.765 21.1152 13.8223 23.821 14.9392 26.5115C15.0198 26.7149 15.0647 26.9353 15.0711 27.1596C15.0775 27.3839 15.0453 27.6075 14.9764 27.8168C14.9075 28.0261 14.8034 28.2168 14.6703 28.3776C14.5372 28.5383 14.3778 28.6658 14.2017 28.7523Z",
                  fill: "rgba(63,81,181,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="84.39%"
              left="12.42%"
              right="81.72%"
              {...getOverrideProps(overrides, "Vector658761")}
            ></Icon>
            <Icon
              width="29.35px"
              height="1.59px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 29.34765625,
                height: 1.586669921875,
              }}
              paths={[
                {
                  d: "M28.6776 1.58676L0.678991 1.58676C0.590043 1.58748 0.501854 1.56748 0.419502 1.52793C0.33715 1.48838 0.262254 1.43005 0.199143 1.35631C0.136032 1.28257 0.0859504 1.19487 0.0517708 1.09826C0.0175912 1.00165 0 0.898029 0 0.793385C0 0.688741 0.0175912 0.585136 0.0517708 0.488526C0.0859504 0.391915 0.136032 0.304214 0.199143 0.230472C0.262254 0.15673 0.33715 0.0984071 0.419502 0.0588554C0.501854 0.0193039 0.590043 -0.000693642 0.678991 1.83654e-05L28.6776 1.83654e-05C28.8557 0.00144372 29.0261 0.0856516 29.1515 0.234283C29.277 0.382915 29.3475 0.5839 29.3475 0.793385C29.3475 1.00287 29.277 1.20386 29.1515 1.35249C29.0261 1.50112 28.8557 1.58534 28.6776 1.58676Z",
                  fill: "rgba(63,81,181,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="21.38%"
              bottom="78%"
              left="52.36%"
              right="38.74%"
              {...getOverrideProps(overrides, "Vector658762")}
            ></Icon>
            <Icon
              width="29.36px"
              height="1.59px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 29.357421875,
                height: 1.586669921875,
              }}
              paths={[
                {
                  d: "M28.6777 1.58676L0.678991 1.58676C0.590043 1.58748 0.501854 1.56749 0.419502 1.52794C0.33715 1.48839 0.262275 1.43005 0.199164 1.35631C0.136053 1.28257 0.0859504 1.19487 0.0517708 1.09826C0.0175912 1.00165 3.94399e-14 0.898041 0 0.793397C3.94399e-14 0.688753 0.0175912 0.585136 0.0517708 0.488526C0.0859504 0.391915 0.136053 0.304214 0.199164 0.230472C0.262275 0.15673 0.33715 0.0984071 0.419502 0.0588554C0.501854 0.0193039 0.590043 -0.000693642 0.678991 1.83654e-05L28.6777 1.83654e-05C28.7666 -0.000693642 28.8548 0.0193039 28.9371 0.0588554C29.0195 0.0984071 29.0944 0.15673 29.1575 0.230472C29.2206 0.304214 29.2707 0.391915 29.3049 0.488526C29.3391 0.585136 29.3566 0.688753 29.3566 0.793397C29.3566 0.898041 29.3391 1.00165 29.3049 1.09826C29.2707 1.19487 29.2206 1.28257 29.1575 1.35631C29.0944 1.43005 29.0195 1.48839 28.9371 1.52794C28.8548 1.56749 28.7666 1.58748 28.6777 1.58676Z",
                  fill: "rgba(63,81,181,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="21.48%"
              bottom="77.9%"
              left="63.13%"
              right="27.98%"
              {...getOverrideProps(overrides, "Vector658763")}
            ></Icon>
            <Icon
              width="29.35px"
              height="1.59px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 29.34765625,
                height: 1.586669921875,
              }}
              paths={[
                {
                  d: "M28.6685 1.58676L0.669823 1.58676C0.491758 1.58534 0.321388 1.50112 0.195903 1.35249C0.0704185 1.20386 3.94399e-14 1.00287 0 0.793385C3.94399e-14 0.5839 0.0704185 0.382915 0.195903 0.234283C0.321388 0.0856516 0.491758 0.00144372 0.669823 1.83654e-05L28.6685 1.83654e-05C28.7574 -0.000693642 28.8456 0.0193039 28.9279 0.0588554C29.0103 0.0984071 29.0852 0.15673 29.1483 0.230472C29.2114 0.304214 29.2615 0.391915 29.2957 0.488526C29.3299 0.585136 29.3475 0.688741 29.3475 0.793385C29.3475 0.898029 29.3299 1.00165 29.2957 1.09826C29.2615 1.19487 29.2114 1.28257 29.1483 1.35631C29.0852 1.43005 29.0103 1.48838 28.9279 1.52793C28.8456 1.56748 28.7574 1.58748 28.6685 1.58676Z",
                  fill: "rgba(63,81,181,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="21.59%"
              bottom="77.8%"
              left="73.89%"
              right="17.21%"
              {...getOverrideProps(overrides, "Vector658764")}
            ></Icon>
            <Icon
              width="29.34px"
              height="1.59px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 29.337890625,
                height: 1.586669921875,
              }}
              paths={[
                {
                  d: "M28.6685 1.58675L0.669823 1.58675C0.491758 1.58532 0.321409 1.5011 0.195924 1.35247C0.0704397 1.20384 0 1.00285 0 0.793366C0 0.583881 0.0704397 0.382896 0.195924 0.234265C0.321409 0.0856332 0.491758 0.00142536 0.669823 0L28.6685 0C28.8465 0.00142536 29.0169 0.0856332 29.1424 0.234265C29.2679 0.382896 29.3383 0.583881 29.3383 0.793366C29.3383 1.00285 29.2679 1.20384 29.1424 1.35247C29.0169 1.5011 28.8465 1.58532 28.6685 1.58675Z",
                  fill: "rgba(63,81,181,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="21.69%"
              bottom="77.7%"
              left="84.66%"
              right="6.45%"
              {...getOverrideProps(overrides, "Vector658765")}
            ></Icon>
            <Icon
              width="10.41px"
              height="12.24px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 10.408203125,
                height: 12.24365234375,
              }}
              paths={[
                {
                  d: "M5.20376 12.2437C8.07771 12.2437 10.4075 9.50285 10.4075 6.12185C10.4075 2.74084 8.07771 0 5.20376 0C2.3298 0 0 2.74084 0 6.12185C0 9.50285 2.3298 12.2437 5.20376 12.2437Z",
                  fill: "rgba(63,81,181,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="14.42%"
              bottom="80.83%"
              left="55.22%"
              right="41.63%"
              {...getOverrideProps(overrides, "Vector658766")}
            ></Icon>
            <Icon
              width="10.41px"
              height="12.24px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 10.408203125,
                height: 12.24365234375,
              }}
              paths={[
                {
                  d: "M5.20376 12.2437C8.07771 12.2437 10.4075 9.50285 10.4075 6.12185C10.4075 2.74084 8.07771 0 5.20376 0C2.3298 0 0 2.74084 0 6.12185C0 9.50285 2.3298 12.2437 5.20376 12.2437Z",
                  fill: "rgba(63,81,181,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="14.42%"
              bottom="80.83%"
              left="66.04%"
              right="30.8%"
              {...getOverrideProps(overrides, "Vector658767")}
            ></Icon>
            <Icon
              width="10.41px"
              height="12.24px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 10.408203125,
                height: 12.24365234375,
              }}
              paths={[
                {
                  d: "M5.20376 12.2437C8.07771 12.2437 10.4075 9.50285 10.4075 6.12185C10.4075 2.74084 8.07771 0 5.20376 0C2.3298 0 0 2.74084 0 6.12185C0 9.50285 2.3298 12.2437 5.20376 12.2437Z",
                  fill: "rgba(63,81,181,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="14.42%"
              bottom="80.83%"
              left="76.87%"
              right="19.97%"
              {...getOverrideProps(overrides, "Vector658768")}
            ></Icon>
            <Icon
              width="10.41px"
              height="12.24px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 10.408203125,
                height: 12.24365234375,
              }}
              paths={[
                {
                  d: "M5.20376 12.2437C8.07771 12.2437 10.4075 9.50285 10.4075 6.12185C10.4075 2.74084 8.07771 0 5.20376 0C2.3298 0 0 2.74084 0 6.12185C0 9.50285 2.3298 12.2437 5.20376 12.2437Z",
                  fill: "rgba(63,81,181,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="14.42%"
              bottom="80.83%"
              left="87.7%"
              right="9.15%"
              {...getOverrideProps(overrides, "Vector658769")}
            ></Icon>
          </View>
        </Flex>
        <Flex
          gap="10px"
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
