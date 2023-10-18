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
  Icon,
  PhoneNumberField,
  Text,
  View,
} from "@aws-amplify/ui-react";
export default function LoginPatientMobileVerification(props) {
  const { overrides, ...rest } = props;
  return (
    <div
      style={{
      width: "100%",
      height: '100vh',
      display: "flex",
      gap: "0",
      direction: "row",
      width: "1280px",
      height: "832px",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
      position: "relative",
      padding: "0px 0px 0px 0px",
      backgroundColor: "rgba(255,255,255,1)"
      }} 
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
            children="Enter Verification Code"
            {...getOverrideProps(overrides, "Mobile Verification")}
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
            children="We have sent the code verification to your mobile phone number"
            {...getOverrideProps(
              overrides,
              "Enter the verification code that we have sent to your email"
            )}
          ></Text>
        </Flex>
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="132px"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "labels")}
        >
      
          {/* <PhoneNumberField
            width="unset"
            height="unset"
            shrink="0"
            alignSelf="stretch"
            label="Label"
            placeholder="Placeholder"
            size="small"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "PhoneNumberField")}
          ></PhoneNumberField> */}

          <Flex
            gap="4px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "TextField")}
          >
            <Text
              fontFamily="Inter"
              fontSize="14px"
              fontWeight="400"
              color="rgba(48,64,80,1)"
              lineHeight="21px"
              textAlign="left"
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
              children="Enter OTP"
              {...getOverrideProps(overrides, "label")}
            ></Text>
            <Flex
              gap="0"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "InputGroup")}
            >
              <Flex
                gap="10px"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="center"
                alignItems="center"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                border="1px SOLID rgba(220,222,224,1)"
                borderRadius="3px"
                padding="6px 12px 6px 12px"
                {...getOverrideProps(overrides, "Input")}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="14px"
                  fontWeight="400"
                  color="rgba(128,128,128,1)"
                  lineHeight="21px"
                  textAlign="left"
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
                  children="OTP"
                  {...getOverrideProps(overrides, "placeholder")}
                ></Text>
              </Flex>
            </Flex>  
          </Flex>
        </Flex>
        
        <View
          width="260px"
          height="unset"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "undraw_my_password_re_ydq7 3")}
        >
          <Icon
            width="147.78px"
            height="150.1px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 147.78125,
              height: 150.09619140625,
            }}
            paths={[
              {
                d: "M133.692 0L119.858 0L119.858 121.036C119.858 122.935 119.493 124.816 118.785 126.57C118.077 128.325 117.039 129.919 115.73 131.262C114.422 132.604 112.869 133.67 111.159 134.396C109.449 135.123 107.617 135.497 105.766 135.497L6.30453e-11 135.497L6.30453e-11 135.635C-5.53535e-06 137.534 0.364463 139.415 1.07261 141.169C1.78076 142.924 2.81871 144.518 4.1272 145.861C5.43569 147.204 6.9891 148.269 8.69873 148.995C10.4084 149.722 12.2407 150.096 14.0912 150.096L133.692 150.096C135.542 150.096 137.375 149.722 139.084 148.995C140.794 148.269 142.347 147.204 143.656 145.861C144.964 144.518 146.002 142.924 146.71 141.169C147.418 139.415 147.783 137.534 147.783 135.635L147.783 14.4608C147.783 10.6256 146.298 6.94741 143.656 4.23548C141.013 1.52355 137.429 1.43405e-06 133.692 0Z",
                fill: "rgba(242,242,242,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="22.42%"
            bottom="19.85%"
            left="12.36%"
            right="30.8%"
            {...getOverrideProps(overrides, "Vector679062")}
          ></Icon>
          <Icon
            width="29.41px"
            height="53.81px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 29.40625,
              height: 53.80810546875,
            }}
            paths={[
              {
                d: "M0.823845 45.1083C1.06875 45.1198 1.31121 45.0538 1.51835 44.9193C1.72549 44.7847 1.88731 44.588 1.98189 44.3559C2.07646 44.1238 2.09921 43.8674 2.04707 43.6216C1.99494 43.3757 1.87042 43.1523 1.6904 42.9815L1.60849 42.6472C1.61928 42.6204 1.63012 42.5937 1.64103 42.567C1.88776 41.9689 2.3012 41.459 2.8294 41.1013C3.3576 40.7436 3.97701 40.5541 4.60984 40.5565C5.24268 40.5589 5.8607 40.7532 6.3863 41.1149C6.91189 41.4766 7.32163 41.9896 7.56402 42.5896C8.53275 44.9839 9.76612 47.3824 10.0698 49.914C10.2036 51.033 10.1471 52.1674 9.90306 53.2667C12.1783 48.1732 13.3598 42.6372 13.3674 37.0341C13.3679 35.6281 13.2918 34.2231 13.1394 32.8258C13.0135 31.6803 12.8388 30.5429 12.6153 29.4137C11.3958 23.2868 8.77749 17.5441 4.97536 12.6573C3.13514 11.6269 1.64692 10.0423 0.711257 8.1172C0.37229 7.42518 0.132719 6.68643 0 5.92396C0.207595 5.95191 0.78273 2.70746 0.626165 2.50841C0.915459 2.05791 1.43323 1.83396 1.74918 1.39435C3.32054 -0.79196 5.48547 -0.410214 6.61565 2.56082C9.02999 3.8113 9.05336 5.88512 7.57193 7.87968C6.62944 9.14863 6.49995 10.8657 5.67298 12.2242C5.75808 12.336 5.84656 12.4442 5.93163 12.556C7.48686 14.6083 8.84234 16.8121 9.97866 19.1357C9.70233 16.5326 10.0321 13.8993 10.941 11.4524C11.8621 9.17207 13.5886 7.25154 15.1089 5.28018C15.5111 4.75062 16.0571 4.35531 16.6782 4.14418C17.2992 3.93304 17.9672 3.91558 18.5979 4.09401C19.2286 4.27245 19.7936 4.63874 20.2214 5.14662C20.6493 5.6545 20.9208 6.28118 21.0017 6.9474C21.0048 6.97646 21.0078 7.00552 21.0108 7.03456C20.785 7.16529 20.5639 7.30405 20.3476 7.45085C20.0759 7.63715 19.8654 7.90333 19.7436 8.21453C19.6218 8.52572 19.5945 8.86742 19.6652 9.19483C19.7358 9.52224 19.9013 9.8201 20.1397 10.0494C20.3782 10.2787 20.6786 10.4287 21.0015 10.4798L21.0346 10.485C20.9542 11.3203 20.812 12.148 20.6092 12.9611C22.5597 20.7018 18.3488 23.5211 12.3363 23.6478C12.2035 23.7176 12.0742 23.7875 11.9415 23.8539C13.0832 27.1741 13.7993 30.6326 14.0718 34.1424C14.2262 36.2131 14.217 38.2932 14.0446 40.3623L14.0548 40.289C14.4905 37.9881 15.6865 35.9121 17.4409 34.4113C20.0467 32.2146 23.7282 31.4057 26.5394 29.6399C26.8382 29.4431 27.1856 29.338 27.5406 29.3371C27.8957 29.3362 28.2435 29.4396 28.5432 29.6349C28.8429 29.8303 29.0819 30.1095 29.2321 30.4397C29.3822 30.7699 29.4372 31.1372 29.3905 31.4984L29.379 31.5755C28.96 31.7507 28.5519 31.9524 28.1573 32.1797C27.9315 32.3104 27.7105 32.4492 27.4942 32.596C27.2225 32.7823 27.0119 33.0485 26.8901 33.3597C26.7684 33.6709 26.741 34.0125 26.8117 34.3399C26.8824 34.6674 27.0478 34.9652 27.2863 35.1945C27.5247 35.4238 27.8251 35.5738 28.1481 35.6249L28.1812 35.6301C28.205 35.6336 28.2254 35.6372 28.2492 35.6407C27.5332 37.3952 26.5282 39.0101 25.2783 40.4147C24.0587 47.1721 18.8207 47.8132 13.2177 45.8454L13.2143 45.8454C12.5995 48.5869 11.7087 51.2554 10.5564 53.808L1.06176 53.808C1.0277 53.6997 0.997108 53.588 0.96647 53.4797C1.84532 53.5364 2.72761 53.4825 3.59369 53.3191C2.88923 52.432 2.18479 51.538 1.48034 50.6509C1.46462 50.6343 1.44985 50.6168 1.43609 50.5985C1.07876 50.1445 0.71802 49.694 0.360694 49.24L0.360501 49.2395C0.341453 47.8478 0.497403 46.4592 0.823845 45.1083Z",
                fill: "rgba(242,242,242,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="79.05%"
            bottom="0.26%"
            left="88.69%"
            right="0%"
            {...getOverrideProps(overrides, "Vector679063")}
          ></Icon>
          <Icon
            width="30.83px"
            height="16.86px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 30.828125,
              height: 16.864013671875,
            }}
            paths={[
              {
                d: "M0.71383 6.89942C1.06048 7.43839 1.51707 7.89365 2.05202 8.23372C2.58698 8.57379 3.18756 8.79056 3.81217 8.86902C4.43679 8.94748 5.07055 8.88575 5.66964 8.68813C6.26873 8.49051 6.81884 8.16169 7.28192 7.72443L27.0219 16.8639L30.8277 11.8822L7.30491 1.20299C6.52972 0.457806 5.51509 0.0303276 4.45329 0.00155299C3.3915 -0.0272216 2.35632 0.344712 1.54388 1.04687C0.731448 1.74903 0.198225 2.73264 0.0452473 3.8113C-0.107731 4.88996 0.130133 5.98873 0.71383 6.89942Z",
                fill: "rgba(160,97,106,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="13.43%"
            bottom="80.08%"
            left="48.51%"
            right="39.63%"
            {...getOverrideProps(overrides, "Vector679064")}
          ></Icon>
          <Icon
            width="75.85px"
            height="27.06px"
            viewBox={{ minX: 0, minY: 0, width: 75.84375, height: 27.05859375 }}
            paths={[
              {
                d: "M73.8304 8.45955L75.7881 19.8449C75.8795 20.3761 75.8616 20.921 75.7356 21.4446C75.6096 21.9683 75.3783 22.4591 75.0565 22.8856C74.7348 23.3121 74.3297 23.6648 73.8672 23.9211C73.4048 24.1774 72.8952 24.3317 72.3713 24.374L39.1041 27.0587L0 9.09864L4.67046 0L38.6164 11.0317L73.8304 8.45955Z",
                fill: "rgba(63,81,181,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="15.02%"
            bottom="74.57%"
            left="52.97%"
            right="17.86%"
            {...getOverrideProps(overrides, "Vector679065")}
          ></Icon>
          <Icon
            width="147.78px"
            height="150.1px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 147.78125,
              height: 150.09619140625,
            }}
            paths={[
              {
                d: "M133.692 0L14.0912 0C6.30885 0 0 6.47433 0 14.4608L0 135.635C0 143.622 6.30885 150.096 14.0912 150.096L133.692 150.096C141.474 150.096 147.783 143.622 147.783 135.635L147.783 14.4608C147.783 6.47433 141.474 0 133.692 0Z",
                fill: "rgba(242,242,242,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="15.14%"
            bottom="27.13%"
            left="0%"
            right="43.16%"
            {...getOverrideProps(overrides, "Vector679066")}
          ></Icon>
          <Icon
            width="141.99px"
            height="144.15px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 141.98828125,
              height: 144.148681640625,
            }}
            paths={[
              {
                d: "M11.1933 1.29091e-12C9.72341 -7.10072e-07 8.26787 0.297109 6.90983 0.874382C5.55179 1.45165 4.31785 2.29778 3.27845 3.36445C2.23905 4.43111 1.41455 5.69742 0.852033 7.09108C0.289515 8.48474 -6.91922e-07 9.97846 1.25791e-12 11.4869L1.25791e-12 132.662C1.22796e-12 135.708 1.17929 138.63 3.27845 140.784C5.37761 142.938 8.22468 144.149 11.1933 144.149L87.5253 144.149C94.6773 144.149 101.759 142.703 108.367 139.894C114.974 137.086 120.978 132.969 126.035 127.779C131.093 122.589 135.104 116.428 137.841 109.647C140.578 102.866 141.987 95.598 141.987 88.2584L141.987 11.4869C141.987 9.97846 141.697 8.48474 141.135 7.09108C140.572 5.69742 139.748 4.43111 138.709 3.36445C137.669 2.29778 136.435 1.45165 135.077 0.874382C133.719 0.297109 132.264 -7.10072e-07 130.794 1.29091e-12L11.1933 1.29091e-12Z",
                fill: "rgba(255,255,255,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="16.28%"
            bottom="28.28%"
            left="1.11%"
            right="44.28%"
            {...getOverrideProps(overrides, "Vector679067")}
          ></Icon>
          <Icon
            width="71.77px"
            height="4.77px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 71.7734375,
              height: 4.766845703125,
            }}
            paths={[
              {
                d: "M69.4518 4.76693L2.32254 4.76693C1.70657 4.76693 1.11582 4.51582 0.680256 4.06883C0.244694 3.62184 0 3.0156 0 2.38347C0 1.75133 0.244694 1.14509 0.680256 0.6981C1.11582 0.251113 1.70657 0 2.32254 0L69.4518 0C70.0678 0 70.6585 0.251113 71.0941 0.6981C71.5296 1.14509 71.7743 1.75133 71.7743 2.38347C71.7743 3.0156 71.5296 3.62184 71.0941 4.06883C70.6585 4.51582 70.0678 4.76693 69.4518 4.76693Z",
                fill: "rgba(242,242,242,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="28.59%"
            bottom="69.57%"
            left="14.57%"
            right="57.83%"
            {...getOverrideProps(overrides, "Vector679068")}
          ></Icon>
          <Icon
            width="71.77px"
            height="4.77px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 71.7734375,
              height: 4.766845703125,
            }}
            paths={[
              {
                d: "M69.4518 4.76693L2.32254 4.76693C1.70657 4.76693 1.11582 4.51582 0.680256 4.06883C0.244694 3.62184 0 3.0156 0 2.38347C0 1.75133 0.244694 1.14509 0.680256 0.6981C1.11582 0.251113 1.70657 0 2.32254 0L69.4518 0C70.0678 0 70.6585 0.251113 71.0941 0.6981C71.5296 1.14509 71.7743 1.75133 71.7743 2.38347C71.7743 3.0156 71.5296 3.62184 71.0941 4.06883C70.6585 4.51582 70.0678 4.76693 69.4518 4.76693Z",
                fill: "rgba(242,242,242,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="48.14%"
            bottom="50.03%"
            left="14.57%"
            right="57.83%"
            {...getOverrideProps(overrides, "Vector679069")}
          ></Icon>
          <Icon
            width="126.29px"
            height="4.77px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 126.29296875,
              height: 4.766845703125,
            }}
            paths={[
              {
                d: "M123.971 4.76695L2.32254 4.76695C1.70657 4.76695 1.11582 4.51584 0.680256 4.06885C0.244694 3.62186 0 3.0156 0 2.38347C0 1.75133 0.244694 1.14509 0.680256 0.698099C1.11582 0.251112 1.70657 0 2.32254 0L123.971 0C124.587 3.07359e-14 125.178 0.251112 125.614 0.698099C126.049 1.14509 126.294 1.75133 126.294 2.38347C126.294 3.0156 126.049 3.62186 125.614 4.06885C125.178 4.51584 124.587 4.76695 123.971 4.76695Z",
                fill: "rgba(242,242,242,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="38.37%"
            bottom="59.79%"
            left="4.08%"
            right="47.34%"
            {...getOverrideProps(overrides, "Vector679070")}
          ></Icon>
          <Icon
            width="46.62px"
            height="30.28px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 46.6171875,
              height: 30.27978515625,
            }}
            paths={[
              {
                d: "M12.1185 3.78498L0 30.2798L46.6177 25.4345L36.8865 0L12.1185 3.78498Z",
                fill: "rgba(160,97,106,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="36.12%"
            bottom="52.23%"
            left="75.09%"
            right="6.98%"
            {...getOverrideProps(overrides, "Vector679071")}
          ></Icon>
          <Icon
            width="6.52px"
            height="17.94px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 6.5234375,
              height: 17.94189453125,
            }}
            paths={[
              {
                d: "M6.37644 17.9419L1.95635 17.9035L0 0L6.52291 0.0567806L6.37644 17.9419Z",
                fill: "rgba(160,97,106,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="89.25%"
            bottom="3.85%"
            left="81.47%"
            right="16.03%"
            {...getOverrideProps(overrides, "Vector679072")}
          ></Icon>
          <Icon
            width="16.17px"
            height="11.99px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 16.16796875,
              height: 11.988037109375,
            }}
            paths={[
              {
                d: "M5.54401e-05 9.81996C-0.00386405 10.3577 0.200181 10.875 0.567466 11.2585C0.934751 11.642 1.43529 11.8604 1.95924 11.8656L10.7471 11.9409L12.2855 8.74072L12.8505 11.9572L16.1663 11.9881L15.3291 0.515959L14.1754 0.437216L9.46997 0.104321L7.95188 0L7.92525 3.24588L0.865965 8.15958C0.601502 8.34379 0.384543 8.59112 0.233722 8.88032C0.0829003 9.16952 0.0027203 9.49196 5.54401e-05 9.81996Z",
                fill: "rgba(47,46,65,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="95.14%"
            bottom="0.25%"
            left="78.47%"
            right="15.31%"
            {...getOverrideProps(overrides, "Vector679073")}
          ></Icon>
          <Icon
            width="9.48px"
            height="19.07px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 9.4765625,
              height: 19.072509765625,
            }}
            paths={[
              {
                d: "M4.21406 19.0725L0 17.7029L3.25565 0L9.47507 2.02064L4.21406 19.0725Z",
                fill: "rgba(160,97,106,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="88.82%"
            bottom="3.85%"
            left="63.48%"
            right="32.87%"
            {...getOverrideProps(overrides, "Vector679074")}
          ></Icon>
          <Icon
            width="17.41px"
            height="13.94px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 17.40625,
              height: 13.935791015625,
            }}
            paths={[
              {
                d: "M0.0917352 6.98892C-0.0659588 7.50171 -0.0190081 8.05772 0.222268 8.53505C0.463544 9.01237 0.879453 9.37198 1.37876 9.53502L9.75717 12.2567L12.1439 9.66158L11.7631 12.9065L14.9238 13.9358L17.4079 2.71758L16.3278 2.29446L11.9253 0.557476L10.5041 0L9.5493 3.0946L1.39478 5.66291C1.08925 5.75925 0.81108 5.93026 0.584119 6.16122C0.357159 6.39217 0.188189 6.6762 0.0917352 6.98892Z",
                fill: "rgba(47,46,65,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="94.48%"
            bottom="0.16%"
            left="59.07%"
            right="34.23%"
            {...getOverrideProps(overrides, "Vector679075")}
          ></Icon>
          <Icon
            width="84.45px"
            height="129.63px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 84.453125,
              height: 129.63037109375,
            }}
            paths={[
              {
                d: "M77.6885 0L35.3017 7.97046C35.3017 7.97046 28.503 13.1894 30.3217 15.0585C32.1403 16.9275 32.4224 16.638 31.2276 17.8642C30.0328 19.0904 27.4492 20.7296 27.4238 21.8025C27.3983 22.8754 8.43025 70.9986 8.43025 70.9986C8.43025 70.9986 10.5378 69.9172 8.95714 71.5394C7.37647 73.1615 7.37647 74.5018 7.37647 74.5018L0 125.61L11.9797 126.334L23.7101 79.7395L49.8751 36.2101C49.8751 36.2101 52.4713 75.0272 52.5802 77.609C52.6891 80.1907 54.2697 76.9465 52.6891 80.1907C51.1084 83.435 50.0546 81.2722 51.1084 83.435C52.1622 85.5978 47.3123 129.63 47.3123 129.63L58.2468 129.63L81.6987 38.3632C81.6987 38.3632 90.0426 12.2709 77.6885 0Z",
                fill: "rgba(47,46,65,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="43.04%"
            bottom="7.1%"
            left="62.32%"
            right="5.2%"
            {...getOverrideProps(overrides, "Vector679076")}
          ></Icon>
          <Icon
            width="48.69px"
            height="78.92px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 48.69140625,
              height: 78.9150390625,
            }}
            paths={[
              {
                d: "M33.2802 1.81046L16.3013 0L11.9023 5.86091L6.77767 8.66192C4.60901 9.84727 2.81895 11.6486 1.62155 13.8504C0.424153 16.0523 -0.129901 18.5615 0.0256662 21.0779L6.01454 56.8292C6.01454 56.8292 0.955868 68.5189 4.43387 71.4284C7.91188 74.3379 1.74485 81.5436 9.17589 77.917C16.6069 74.2903 48.6927 78.4577 48.6927 78.4577L41.8431 58.4514L46.9599 38.7924L47.5231 22.3087C47.6283 19.2284 46.7376 16.199 44.9898 13.6926C43.2419 11.1861 40.7352 9.34353 37.8602 8.45196L37.1448 8.23009L33.2802 1.81046Z",
                fill: "rgba(63,81,181,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="14.26%"
            bottom="55.38%"
            left="74.6%"
            right="6.67%"
            {...getOverrideProps(overrides, "Vector679077")}
          ></Icon>
          <Icon
            width="19.7px"
            height="43.79px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 19.6953125,
              height: 43.790283203125,
            }}
            paths={[
              {
                d: "M19.6912 21.8557C19.8024 26.7669 18.0138 31.5225 15.4445 35.6995C14.6811 33.261 13.3087 31.0417 11.8774 28.9261C12.5988 33.5028 11.8303 38.1959 9.69075 42.2792C9.6153 42.3346 9.5372 42.386 9.4567 42.4333C7.36239 43.7261 4.70721 44.2498 2.44163 43.316C7.12268 38.1378 7.71839 29.5582 3.79384 23.75C2.68273 22.1019 1.24574 20.6443 0.557538 18.7687C-0.529053 15.7762 0.515463 12.4813 1.17438 9.36119C1.79051 6.45735 1.89837 3.00175 0 0.873595C0.202775 0.576191 0.47896 0.339454 0.800241 0.187648C1.12152 0.0358423 1.47633 -0.0255759 1.82836 0.0096828C2.99882 0.179353 3.8508 1.22339 4.39341 2.29869C4.93603 3.37395 5.2939 4.56571 6.05011 5.49447C7.45051 7.23286 9.83536 7.64386 11.8451 8.56003C16.7124 10.7848 19.5745 16.3907 19.6912 21.8557Z",
                fill: "rgba(47,46,65,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="1.42%"
            bottom="81.74%"
            left="88.82%"
            right="3.61%"
            {...getOverrideProps(overrides, "Vector679078")}
          ></Icon>
          <Icon
            width="134.71px"
            height="1.29px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 134.7109375,
              height: 1.286865234375,
            }}
            paths={[
              {
                d: "M2.77923e-06 0.643451C-0.000242788 0.728023 0.0157873 0.811796 0.047212 0.889979C0.0786366 0.968161 0.124841 1.03918 0.183115 1.09898C0.24139 1.15878 0.310592 1.20617 0.386777 1.23842C0.462963 1.27066 0.544626 1.28715 0.627036 1.2869L134.083 1.2869C134.249 1.2869 134.409 1.21909 134.526 1.09842C134.644 0.977752 134.71 0.814103 134.71 0.643451C134.71 0.472798 134.644 0.309116 134.526 0.188447C134.409 0.067777 134.249 2.88278e-06 134.083 2.88278e-06L0.627036 2.88278e-06C0.544626 -0.00025052 0.462962 0.0162043 0.386777 0.0484504C0.310593 0.0806965 0.241389 0.128086 0.183115 0.187886C0.124841 0.247685 0.0786698 0.318709 0.0472441 0.39689C0.0158184 0.475071 -0.000239991 0.558879 2.77923e-06 0.643451Z",
                fill: "rgba(204,204,204,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="99.51%"
            bottom="0%"
            left="48.16%"
            right="0.03%"
            {...getOverrideProps(overrides, "Vector679079")}
          ></Icon>
          <Icon
            width="9.48px"
            height="9.73px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 9.484375,
              height: 9.73291015625,
            }}
            paths={[
              {
                d: "M4.74201 9.7328C7.36096 9.7328 9.48403 7.55404 9.48403 4.8664C9.48403 2.17876 7.36096 0 4.74201 0C2.12307 0 0 2.17876 0 4.8664C0 7.55404 2.12307 9.7328 4.74201 9.7328Z",
                fill: "rgba(63,81,181,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="49.86%"
            bottom="46.4%"
            left="94.97%"
            right="1.38%"
            {...getOverrideProps(overrides, "Vector679080")}
          ></Icon>
          <Icon
            width="26.87px"
            height="35.97px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 26.87109375,
              height: 35.974609375,
            }}
            paths={[
              {
                d: "M3.87523 17.4249C4.15336 16.4259 2.23629 22.5327 3.16137 22.6429C7.37471 23.139 13.1585 25.7213 16.0931 26.926C16.2252 26.9102 16.3574 26.8945 16.4857 26.8748C16.8005 26.8394 17.1076 26.7882 17.4107 26.7292C24.2438 25.4024 26.8714 14.6307 26.8714 14.5323C26.8714 14.048 25.7389 0.747913 23.9549 0.551094C23.4863 0.498915 23.0153 0.472629 22.544 0.47235L18.1169 0.47235C17.2008 0.269766 16.2723 0.131651 15.3378 0.0589705L15.33 0.0589705C6.41751 -0.637882 -0.609899 4.93686 0.0469756 11.7203C0.0508641 11.7281 0.058641 11.736 0.0625084 11.7439C0.252985 12.0352 0.420138 12.3108 0.56782 12.5746C0.71163 12.8226 0.832106 13.0588 0.937036 13.2833C1.7494 15.0155 -0.338759 17.1953 1.04586 17.6021C2.88741 18.1433 -3.79748 35.9288 3.49157 35.9288C-0.0539726 36.9632 3.10796 20.1808 3.87523 17.4249Z",
                fill: "rgba(47,46,65,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="2.04%"
            bottom="84.12%"
            left="79.14%"
            right="10.52%"
            {...getOverrideProps(overrides, "Vector679081")}
          ></Icon>
          <Icon
            width="20.96px"
            height="21.51px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 20.96484375,
              height: 21.513427734375,
            }}
            paths={[
              {
                d: "M10.4817 21.5133C16.2706 21.5133 20.9635 16.6974 20.9635 10.7567C20.9635 4.81592 16.2706 0 10.4817 0C4.69283 0 0 4.81592 0 10.7567C0 16.6974 4.69283 21.5133 10.4817 21.5133Z",
                fill: "rgba(160,97,106,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="4.48%"
            bottom="87.24%"
            left="79.66%"
            right="12.28%"
            {...getOverrideProps(overrides, "Vector679082")}
          ></Icon>
          <Icon
            width="29.59px"
            height="40.46px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 29.5859375,
              height: 40.46435546875,
            }}
            paths={[
              {
                d: "M0 12.5117C0.174928 12.6062 0.345933 12.6928 0.520845 12.7794C0.703512 12.87 0.886223 12.9605 1.0689 13.0432C4.57872 14.6771 7.43553 14.8581 9.16907 12.5117C9.21549 11.2771 9.48567 10.0621 9.96583 8.92906C9.88103 10.1953 10.2063 11.4548 10.8909 12.5117L14.3813 12.5117C17.9766 14.9605 19.8229 15.2164 17.3275 23.2557C16.6318 25.4959 13.8654 38.5312 14.9537 40.4642C15.2685 40.4288 18.6179 26.1511 18.9211 26.0921C25.7542 24.7653 30.0958 13.2125 29.54 12.559C29.5427 10.7005 29.1263 8.86657 28.3234 7.20074C27.3076 5.09024 25.7241 3.32241 23.7602 2.1063C22.5896 1.5238 21.3692 1.0533 20.1144 0.700797C20.0833 0.692914 20.056 0.685033 20.025 0.677176C19.6402 0.570867 19.2476 0.472447 18.855 0.389766C18.044 0.214031 17.2238 0.0865244 16.3985 0.00788757C16.3402 0.00394579 16.282 0 16.2275 0C15.898 0.000791678 15.5746 0.0918592 15.2908 0.263796C15.2869 0.263796 15.2869 0.267715 15.283 0.267715C15.0802 0.389328 14.9032 0.551283 14.7622 0.74408C14.514 1.06848 14.3797 1.4694 14.3813 1.88187L10.4945 1.88187C10.3507 1.88187 10.2068 1.8858 10.063 1.89367C7.46888 1.98465 5.00121 3.06578 3.14288 4.92551C1.28456 6.78523 0.169355 9.28969 0.0155327 11.9487C0.00388317 12.1377 0 12.3227 0 12.5117Z",
                fill: "rgba(47,46,65,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="1.96%"
            bottom="82.48%"
            left="79.16%"
            right="9.46%"
            {...getOverrideProps(overrides, "Vector679083")}
          ></Icon>
          <Icon
            width="13.81px"
            height="14.17px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 13.8125,
              height: 14.173095703125,
            }}
            paths={[
              {
                d: "M6.90542 14.1731C10.7192 14.1731 13.8108 11.0004 13.8108 7.08656C13.8108 3.17276 10.7192 0 6.90542 0C3.09166 0 0 3.17276 0 7.08656C0 11.0004 3.09166 14.1731 6.90542 14.1731Z",
                fill: "rgba(47,46,65,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0%"
            bottom="94.55%"
            left="85.32%"
            right="9.37%"
            {...getOverrideProps(overrides, "Vector679084")}
          ></Icon>
          <Icon
            width="8.67px"
            height="32.29px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 8.67578125,
              height: 32.29345703125,
            }}
            paths={[
              {
                d: "M7.99915 30.2315C8.33616 29.6861 8.55371 29.0721 8.63676 28.432C8.7198 27.7918 8.66635 27.1408 8.48011 26.524C8.29388 25.9071 7.97932 25.3391 7.55815 24.8593C7.13698 24.3795 6.61927 23.9993 6.04083 23.745L6.07502 1.52103L0.0873295 0L0.23481 26.3961C-0.109874 27.4271 -0.0740546 28.5521 0.335499 29.5578C0.745053 30.5635 1.49986 31.3801 2.45692 31.8529C3.41398 32.3257 4.50679 32.4218 5.52825 32.1229C6.54972 31.8241 7.42888 31.1511 7.99915 30.2315Z",
                fill: "rgba(160,97,106,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="40.88%"
            bottom="46.7%"
            left="93.74%"
            right="2.93%"
            {...getOverrideProps(overrides, "Vector679085")}
          ></Icon>
          <Icon
            width="30.82px"
            height="76.02px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 30.82421875,
              height: 76.01806640625,
            }}
            paths={[
              {
                d: "M0 7.16744L9.31767 0.668969C9.75237 0.365797 10.244 0.159264 10.7611 0.062616C11.2782 -0.0340325 11.8092 -0.018656 12.3202 0.107763C12.8311 0.234183 13.3107 0.468841 13.728 0.796688C14.1453 1.12454 14.4913 1.53832 14.7436 2.01147L30.763 32.0526L30.8242 76.0181L20.8228 75.3748L16.7172 39.0772L0 7.16744Z",
                fill: "rgba(63,81,181,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="18.35%"
            bottom="52.42%"
            left="85.41%"
            right="2.73%"
            {...getOverrideProps(overrides, "Vector679086")}
          ></Icon>
          <Icon
            width="115.92px"
            height="16.76px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 115.9140625,
              height: 16.761962890625,
            }}
            paths={[
              {
                d: "M107.749 0L8.1668 0C6.00083 1.32488e-07 3.92356 0.883004 2.39199 2.45475C0.860418 4.0265 0 6.15824 0 8.38102C0 10.6038 0.860418 12.7356 2.39199 14.3073C3.92356 15.8791 6.00083 16.762 8.1668 16.762L107.749 16.762C109.915 16.762 111.992 15.8791 113.524 14.3073C115.055 12.7356 115.916 10.6038 115.916 8.38102C115.916 6.15824 115.055 4.0265 113.524 2.45475C111.992 0.883004 109.915 0 107.749 0Z",
                fill: "rgba(255,255,255,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="59.45%"
            bottom="34.1%"
            left="16.44%"
            right="38.97%"
            {...getOverrideProps(overrides, "Vector679087")}
          ></Icon>
          <Icon
            width="116.97px"
            height="17.84px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 116.96875,
              height: 17.843505859375,
            }}
            paths={[
              {
                d: "M108.276 17.8434L8.69369 17.8434C6.38798 17.8434 4.17671 16.9035 2.54632 15.2304C0.915938 13.5572 0 11.2879 0 8.92173C0 6.55554 0.915938 4.28626 2.54632 2.61311C4.17671 0.939963 6.38798 3.07359e-14 8.69369 3.07359e-14L108.276 3.07359e-14C110.582 0 112.793 0.939963 114.423 2.61311C116.054 4.28626 116.97 6.55554 116.97 8.92173C116.97 11.2879 116.054 13.5572 114.423 15.2304C112.793 16.9035 110.582 17.8434 108.276 17.8434ZM8.69369 1.08142C6.66746 1.08142 4.72422 1.90745 3.29146 3.37779C1.8587 4.84814 1.05378 6.84235 1.05378 8.92173C1.05378 11.0011 1.8587 12.9953 3.29146 14.4657C4.72422 15.936 6.66746 16.762 8.69369 16.762L108.276 16.762C110.302 16.762 112.245 15.936 113.678 14.4657C115.111 12.9953 115.916 11.0011 115.916 8.92173C115.916 6.84235 115.111 4.84814 113.678 3.37779C112.245 1.90745 110.302 1.08142 108.276 1.08142L8.69369 1.08142Z",
                fill: "rgba(63,81,181,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="59.24%"
            bottom="33.89%"
            left="16.24%"
            right="38.77%"
            {...getOverrideProps(overrides, "Vector679088")}
          ></Icon>
          <Icon
            width="48.59px"
            height="4.77px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 48.58984375,
              height: 4.766845703125,
            }}
            paths={[
              {
                d: "M46.2686 4.76693L2.32254 4.76693C1.70657 4.76693 1.11582 4.51582 0.680256 4.06883C0.244694 3.62184 5.99005e-14 3.0156 0 2.38347C5.99005e-14 1.75133 0.244694 1.14509 0.680256 0.6981C1.11582 0.251112 1.70657 6.14717e-14 2.32254 0L46.2686 0C46.8846 6.14717e-14 47.4753 0.251112 47.9109 0.6981C48.3464 1.14509 48.5911 1.75133 48.5911 2.38347C48.5911 3.0156 48.3464 3.62184 47.9109 4.06883C47.4753 4.51582 46.8846 4.76693 46.2686 4.76693Z",
                fill: "rgba(63,81,181,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="71.69%"
            bottom="26.48%"
            left="42.35%"
            right="38.96%"
            {...getOverrideProps(overrides, "Vector679089")}
          ></Icon>
          <Text
            fontFamily="Roboto"
            fontSize="11px"
            fontWeight="400"
            color="rgba(63,81,181,1)"
            textTransform="uppercase"
            lineHeight="0px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="123px"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="22.53%"
            bottom="77.47%"
            left="6.15%"
            right="46.54%"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Verification Code"
            {...getOverrideProps(overrides, "Verification Code")}
          ></Text>
          <Icon
            width="141.82px"
            height="31.68px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 141.81640625,
              height: 31.6845703125,
            }}
            paths={[
              {
                d: "M15.0034 0C11.0243 8.27226e-15 7.20809 1.66909 4.3944 4.6401C1.58071 7.6111 0 11.6407 0 15.8423C0 20.0439 1.58071 24.0735 4.3944 27.0445C7.20809 30.0155 11.0243 31.6846 15.0034 31.6846L126.815 31.6846C130.794 31.6846 134.61 30.0155 137.424 27.0445C140.237 24.0735 141.818 20.0439 141.818 15.8423C141.818 11.6407 140.237 7.6111 137.424 4.6401C134.61 1.66909 130.794 8.27226e-15 126.815 0L15.0034 0Z",
                fill: "rgba(229,229,229,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="37.63%"
            bottom="50.18%"
            left="2.45%"
            right="43.01%"
            {...getOverrideProps(overrides, "Vector679091")}
          ></Icon>
          <Icon
            width="136.36px"
            height="24.23px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 136.36328125,
              height: 24.2294921875,
            }}
            paths={[
              {
                d: "M12.0215 0C8.83322 0 5.7755 1.27637 3.52102 3.54831C1.26655 5.82026 0 8.90168 3.14797e-14 12.1147C0 15.3277 1.26655 18.4091 3.52102 20.6811C5.7755 22.953 8.83322 24.2294 12.0215 24.2294L124.342 24.2294C127.53 24.2294 130.588 22.953 132.843 20.6811C135.097 18.4091 136.364 15.3277 136.364 12.1147C136.364 8.90168 135.097 5.82026 132.843 3.54831C130.588 1.27637 127.53 9.57554e-08 124.342 0L12.0215 0Z",
                fill: "rgba(255,255,255,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="39.07%"
            bottom="51.61%"
            left="3.5%"
            right="44.06%"
            {...getOverrideProps(overrides, "Vector679092")}
          ></Icon>
          <Icon
            width="23.64px"
            height="0.93px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 23.63671875,
              height: 0.931884765625,
            }}
            paths={[
              {
                d: "M23.0969 0.931889L0.546858 0.931889C0.475219 0.932307 0.404192 0.920563 0.337866 0.897335C0.27154 0.874106 0.211219 0.839854 0.160389 0.796546C0.10956 0.753238 0.0692243 0.701732 0.0416961 0.644994C0.0141679 0.588256 0 0.527402 0 0.465946C0 0.40449 0.0141679 0.343644 0.0416961 0.286906C0.0692243 0.230168 0.10956 0.178662 0.160389 0.135354C0.211219 0.0920456 0.27154 0.0577934 0.337866 0.0345652C0.404192 0.0113369 0.475219 -0.000407368 0.546858 1.07858e-05L23.0969 1.07858e-05C23.2403 0.000847883 23.3775 0.0503022 23.4786 0.137592C23.5796 0.224882 23.6364 0.342918 23.6364 0.465946C23.6364 0.588975 23.5796 0.707011 23.4786 0.794301C23.3775 0.88159 23.2403 0.931052 23.0969 0.931889Z",
                fill: "rgba(63,81,181,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="46.24%"
            bottom="53.41%"
            left="8.74%"
            right="82.17%"
            {...getOverrideProps(overrides, "Vector679093")}
          ></Icon>
          <Icon
            width="23.64px"
            height="0.93px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 23.63671875,
              height: 0.931884765625,
            }}
            paths={[
              {
                d: "M23.0897 0.931889L0.546687 0.931889C0.47507 0.932307 0.404066 0.92057 0.33776 0.897342C0.271455 0.874114 0.21117 0.839854 0.160356 0.796546C0.109542 0.753238 0.0692026 0.701732 0.041683 0.644994C0.0141634 0.588256 3.17549e-14 0.52741 0 0.465953C3.17549e-14 0.404497 0.0141634 0.343644 0.041683 0.286906C0.0692026 0.230168 0.109542 0.178662 0.160356 0.135354C0.21117 0.0920456 0.271455 0.0577934 0.33776 0.0345652C0.404066 0.0113369 0.47507 -0.000407368 0.546687 1.07858e-05L23.0897 1.07858e-05C23.1613 -0.000407368 23.2323 0.0113369 23.2986 0.0345652C23.3649 0.0577934 23.4252 0.0920456 23.476 0.135354C23.5268 0.178662 23.5672 0.230168 23.5947 0.286906C23.6222 0.343644 23.6364 0.404497 23.6364 0.465953C23.6364 0.52741 23.6222 0.588256 23.5947 0.644994C23.5672 0.701732 23.5268 0.753238 23.476 0.796546C23.4252 0.839854 23.3649 0.874114 23.2986 0.897342C23.2323 0.92057 23.1613 0.932307 23.0897 0.931889Z",
                fill: "rgba(63,81,181,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="46.24%"
            bottom="53.41%"
            left="19.58%"
            right="71.33%"
            {...getOverrideProps(overrides, "Vector679094")}
          ></Icon>
          <Icon
            width="22.73px"
            height="0.93px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 22.7265625,
              height: 0.931884765625,
            }}
            paths={[
              {
                d: "M22.2015 0.931889L0.518725 0.931889C0.380828 0.931052 0.248889 0.88159 0.151711 0.794301C0.0545336 0.707011 3.05431e-14 0.588975 0 0.465946C3.05431e-14 0.342918 0.0545336 0.224882 0.151711 0.137592C0.248889 0.0503022 0.380828 0.000847883 0.518725 1.07858e-05L22.2014 1.07858e-05C22.2703 -0.000407368 22.3386 0.0113369 22.4024 0.0345652C22.4662 0.0577934 22.5242 0.0920456 22.5731 0.135354C22.6219 0.178662 22.6607 0.230168 22.6872 0.286906C22.7136 0.343644 22.7273 0.40449 22.7273 0.465946C22.7273 0.527402 22.7136 0.588256 22.6872 0.644994C22.6607 0.701732 22.6219 0.753238 22.5731 0.796546C22.5242 0.839854 22.4662 0.874106 22.4024 0.897335C22.3386 0.920563 22.2703 0.932307 22.2015 0.931889Z",
                fill: "rgba(63,81,181,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="46.24%"
            bottom="53.41%"
            left="30.77%"
            right="60.49%"
            {...getOverrideProps(overrides, "Vector679095")}
          ></Icon>
          <Icon
            width="22.73px"
            height="0.93px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 22.7265625,
              height: 0.931884765625,
            }}
            paths={[
              {
                d: "M22.2084 0.9319L0.518887 0.9319C0.380947 0.931063 0.248984 0.8816 0.151775 0.794308C0.054567 0.707016 0 0.588977 0 0.465946C0 0.342915 0.054567 0.224876 0.151775 0.137584C0.248984 0.0502926 0.380947 0.000837117 0.518887 0L22.2084 0C22.3463 0.000837117 22.4783 0.0502926 22.5755 0.137584C22.6727 0.224876 22.7273 0.342915 22.7273 0.465946C22.7273 0.588977 22.6727 0.707016 22.5755 0.794308C22.4783 0.8816 22.3463 0.931063 22.2084 0.9319Z",
                fill: "rgba(63,81,181,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="46.24%"
            bottom="53.41%"
            left="41.61%"
            right="49.65%"
            {...getOverrideProps(overrides, "Vector679096")}
          ></Icon>
          <Icon
            width="8.18px"
            height="8.39px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 8.18359375,
              height: 8.38720703125,
            }}
            paths={[
              {
                d: "M4.09091 8.3871C6.35026 8.3871 8.18182 6.50958 8.18182 4.19355C8.18182 1.87752 6.35026 0 4.09091 0C1.83156 0 0 1.87752 0 4.19355C0 6.50958 1.83156 8.3871 4.09091 8.3871Z",
                fill: "rgba(63,81,181,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="41.22%"
            bottom="55.56%"
            left="11.89%"
            right="84.97%"
            {...getOverrideProps(overrides, "Vector679097")}
          ></Icon>
          <Icon
            width="8.18px"
            height="8.39px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 8.18359375,
              height: 8.38720703125,
            }}
            paths={[
              {
                d: "M4.09091 8.3871C6.35026 8.3871 8.18182 6.50958 8.18182 4.19355C8.18182 1.87752 6.35026 0 4.09091 0C1.83156 0 0 1.87752 0 4.19355C0 6.50958 1.83156 8.3871 4.09091 8.3871Z",
                fill: "rgba(63,81,181,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="41.22%"
            bottom="55.56%"
            left="22.73%"
            right="74.13%"
            {...getOverrideProps(overrides, "Vector679098")}
          ></Icon>
          <Icon
            width="8.18px"
            height="8.39px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 8.18359375,
              height: 8.38720703125,
            }}
            paths={[
              {
                d: "M4.09091 8.3871C6.35026 8.3871 8.18182 6.50958 8.18182 4.19355C8.18182 1.87752 6.35026 0 4.09091 0C1.83156 0 0 1.87752 0 4.19355C0 6.50958 1.83156 8.3871 4.09091 8.3871Z",
                fill: "rgba(63,81,181,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="41.22%"
            bottom="55.56%"
            left="33.57%"
            right="63.29%"
            {...getOverrideProps(overrides, "Vector679099")}
          ></Icon>
          <Icon
            width="9.09px"
            height="8.39px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 9.08984375,
              height: 8.38720703125,
            }}
            paths={[
              {
                d: "M4.54545 8.3871C7.05584 8.3871 9.09091 6.50958 9.09091 4.19355C9.09091 1.87752 7.05584 0 4.54545 0C2.03507 0 0 1.87752 0 4.19355C0 6.50958 2.03507 8.3871 4.54545 8.3871Z",
                fill: "rgba(63,81,181,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="41.22%"
            bottom="55.56%"
            left="44.41%"
            right="52.1%"
            {...getOverrideProps(overrides, "Vector679100")}
          ></Icon>
        </View>
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="40px"
          justifyContent="space-between"
          alignItems="center"
          shrink="0"
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
            children="LET’S GET STARTED!"
            style={{ backgroundColor: '#043495' }}
            {...getOverrideProps(overrides, "Button")}
          ></Button>
        </Flex>
      </Flex>
    </div>
  );
}
