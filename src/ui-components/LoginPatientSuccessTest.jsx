/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Button, Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
import bgImage from "../images/doctor.png";
export default function LoginPatientSuccessTest(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { breakpoints: "xl" },
    },
    {
      variantValues: { breakpoints: "large" },
    },
    {  
      variantValues: { breakpoints: "medium" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
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
      <View
        padding="0px 0px 0px 0px"
        width="1280px"
        height="832px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        {...getOverrideProps(overrides, "Group 26086145")}
      >
        <Image
          width="1280px"
          height="832px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(
            overrides,
            "national-cancer-institute-L8tWZT4CcVQ-unsplash 1"
          )}
        ></Image>
        <View
          width="1280px"
          height="832px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,0)"
          {...getOverrideProps(overrides, "Background Tint")}
        ></View>
      </View>
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
        display="flex"
        {...getOverrideProps(overrides, "Frame 1")}
      >
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          padding="16px 16px 16px 16px"
          display="flex"
          {...getOverrideProps(overrides, "Frame 26086146")}
        >
          <View
            width="122px"
            height="96px"
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
              width="25.56px"
              height="44.49px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 25.55859375,
                height: 44.4892578125,
              }}
              paths={[
                {
                  d: "M4.9613 14.7938C9.14227 6.08541 17.1175 -0.601242 25.56 0.0429125C19.3326 8.06137 15.7012 18.4295 15.3085 29.313C15.1698 33.5109 15.3848 38.1971 13.0308 41.3405C11.5661 43.2964 9.32723 44.2437 7.12595 44.4424C4.92457 44.6411 2.72371 44.1701 0.551745 43.7012L0.0248766 43.8927C-0.175705 33.8783 0.780331 23.5023 4.9613 14.7938Z",
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
              {...getOverrideProps(overrides, "Vector1507126")}
            ></Icon>
            <Icon
              width="25.69px"
              height="43.84px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 25.6875,
                height: 43.8447265625,
              }}
              paths={[
                {
                  d: "M25.5765 0.440128C19.3334 3.99873 14.01 9.94197 10.7421 17.1902C10.0356 18.7573 9.43412 20.4197 9.17173 22.1775C8.90922 23.936 9.09258 25.61 9.59986 27.2802C10.0636 28.8071 10.6873 30.3054 10.8295 31.9392C10.9794 33.6614 10.4443 35.2716 9.48096 36.5495C8.30234 38.1131 6.71952 39.0821 5.14383 39.9659C3.39433 40.9472 1.56402 41.9337 0.324884 43.7652C0.174744 43.9871 -0.107287 43.6983 0.0426251 43.4767C2.19852 40.2902 5.88886 39.6912 8.44791 37.1243C9.64202 35.9266 10.5385 34.2955 10.4819 32.3842C10.4325 30.713 9.7904 29.1673 9.30956 27.626C8.80466 26.0077 8.55288 24.3805 8.73394 22.6551C8.91915 20.8902 9.46704 19.1963 10.1366 17.6148C11.6467 14.048 13.7132 10.7734 16.0806 7.94266C18.8013 4.68886 21.9721 2.01013 25.4558 0.0223516C25.6714 -0.100574 25.7908 0.318004 25.5765 0.440128Z",
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
              {...getOverrideProps(overrides, "Vector1507127")}
            ></Icon>
            <Icon
              width="2.36px"
              height="7.62px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 2.36328125,
                height: 7.6171875,
              }}
              paths={[
                {
                  d: "M2.04818 7.57247C1.0911 6.74385 0.413936 5.53938 0.137631 4.17416C-0.138674 2.80894 0.00387212 1.37188 0.539807 0.119617C0.648984 -0.133325 0.98607 0.0556709 0.876749 0.30895C0.375869 1.47397 0.243201 2.81261 0.502691 4.08327C0.76218 5.35394 1.39673 6.47292 2.29182 7.23827C2.48617 7.40486 2.24142 7.73811 2.04818 7.57247Z",
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
              {...getOverrideProps(overrides, "Vector1507128")}
            ></Icon>
            <Icon
              width="6.59px"
              height="4.64px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 6.58984375,
                height: 4.63916015625,
              }}
              paths={[
                {
                  d: "M0.164901 4.19616C2.56314 3.78124 4.7412 2.31127 6.26476 0.0793667C6.41555 -0.14191 6.69763 0.146839 6.54701 0.367848C4.9579 2.68692 2.68868 4.2112 0.192209 4.63647C-0.0457628 4.67682 -0.0717793 4.23628 0.164901 4.19616Z",
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
              {...getOverrideProps(overrides, "Vector1507129")}
            ></Icon>
            <Icon
              width="3.03px"
              height="1.6px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 3.02734375,
                height: 1.6015625,
              }}
              paths={[
                {
                  d: "M0.305818 0.0531918C0.619713 0.465174 1.01511 0.778393 1.45651 0.964721C1.8979 1.15105 2.37148 1.20465 2.83469 1.12071C3.07211 1.07682 3.09787 1.51741 2.862 1.56102C2.34985 1.65094 1.8269 1.59098 1.33884 1.3864C0.850783 1.18182 0.412465 0.838824 0.0621792 0.387396C0.0261498 0.348121 0.00410444 0.294077 0.000517935 0.236246C-0.00306857 0.178415 0.0120698 0.121139 0.0428675 0.0760533C0.0753144 0.0319954 0.121141 0.00487709 0.170378 0.000596134C0.219615 -0.00368483 0.268284 0.0152186 0.305818 0.0531918Z",
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
              {...getOverrideProps(overrides, "Vector1507130")}
            ></Icon>
            <Icon
              width="42.68px"
              height="28.87px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 42.68359375,
                height: 28.86767578125,
              }}
              paths={[
                {
                  d: "M42.6835 5.48644C42.5359 5.51884 42.3884 5.55124 42.2394 5.58702C40.257 6.03477 38.3087 6.67249 36.4135 7.49386C36.2661 7.5546 36.1175 7.6188 35.9719 7.68443C31.4239 9.72092 27.2347 12.7395 23.6173 16.5867C22.1791 18.1192 20.8413 19.779 19.6158 21.5518C17.9233 24.0002 16.2528 26.8143 14.0412 28.4107C13.812 28.5803 13.5742 28.733 13.3291 28.8678L0.588604 22.6105C0.565678 22.5791 0.541404 22.551 0.518336 22.5195L0 22.2972C0.0578157 22.2006 0.119536 22.1018 0.177352 22.0052C0.210698 21.9489 0.246862 21.8941 0.280208 21.8378C0.303335 21.8008 0.326613 21.7638 0.345693 21.7288C0.353351 21.7164 0.361153 21.7042 0.367612 21.6952C0.386692 21.6602 0.407552 21.6301 0.425425 21.5986C0.769126 21.0453 1.11671 20.4939 1.46817 19.9444C1.46938 19.941 1.46938 19.941 1.47343 19.939C4.16043 15.7603 7.16567 11.8106 10.5817 8.52657C10.6845 8.4278 10.7883 8.32552 10.897 8.22961C12.4437 6.75943 14.0893 5.44139 15.8173 4.28865C16.7653 3.66105 17.7395 3.09067 18.7361 2.57971C21.3135 1.26531 24.0494 0.439111 26.8436 0.131394C32.4139 -0.481057 38.0876 1.02266 42.3598 5.16609C42.469 5.27217 42.5755 5.3769 42.6835 5.48644Z",
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
              {...getOverrideProps(overrides, "Vector1507131")}
            ></Icon>
            <Icon
              width="42.65px"
              height="18.73px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 42.65625,
                height: 18.73388671875,
              }}
              paths={[
                {
                  d: "M42.4107 1.19635C35.6164 -0.412907 28.3439 0.537491 22.0491 3.9952C20.6882 4.74275 19.3626 5.64131 18.2593 6.85773C17.1555 8.07468 16.4508 9.54197 16.0065 11.2372C15.6004 12.7869 15.3365 14.4279 14.6193 15.8338C13.8633 17.3156 12.6172 18.2198 11.1983 18.5535C9.46216 18.9617 7.70568 18.607 5.99817 18.1894C4.1023 17.7257 2.1393 17.2086 0.218624 17.7876C-0.0140921 17.8578 -0.0924201 17.4261 0.139945 17.356C3.48159 16.3487 6.73271 18.5012 10.0812 18.276C11.6437 18.1709 13.1888 17.5076 14.1155 15.9413C14.9258 14.5716 15.1991 12.8797 15.5989 11.3064C16.0186 9.65429 16.645 8.17557 17.6669 6.92703C18.7122 5.64983 20.011 4.68801 21.3498 3.90254C24.3691 2.13112 27.6842 0.989742 31.0138 0.417217C34.8406 -0.241176 38.7344 -0.11959 42.5267 0.776707C42.7614 0.832297 42.6438 1.25158 42.4107 1.19635Z",
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
              {...getOverrideProps(overrides, "Vector1507132")}
            ></Icon>
            <Icon
              width="3.07px"
              height="7.21px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 3.0703125,
                height: 7.21240234375,
              }}
              paths={[
                {
                  d: "M0.21353 7.05C-0.129307 5.7061 -0.0575327 4.26167 0.416041 2.97465C0.889615 1.68763 1.73415 0.641827 2.79882 0.0240227C3.01461 -0.100109 3.18765 0.291101 2.97158 0.415397C1.97926 0.98853 1.19266 1.96278 0.753734 3.16232C0.314812 4.36186 0.252487 5.70768 0.578003 6.95685C0.648471 7.22841 0.283594 7.32001 0.21353 7.05Z",
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
              {...getOverrideProps(overrides, "Vector1507133")}
            ></Icon>
            <Icon
              width="7.47px"
              height="1.87px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 7.47265625,
                height: 1.87158203125,
              }}
              paths={[
                {
                  d: "M0.290852 0.0297896C2.41669 1.40816 4.9032 1.78716 7.25456 1.09122C7.48747 1.02205 7.56587 1.45368 7.33324 1.52278C4.88521 2.24158 2.2983 1.84094 0.0887636 0.400819C-0.121757 0.263386 0.0814741 -0.106901 0.290852 0.0297896Z",
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
              {...getOverrideProps(overrides, "Vector1507134")}
            ></Icon>
            <Icon
              width="1.93px"
              height="3.23px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 1.93359375,
                height: 3.228515625,
              }}
              paths={[
                {
                  d: "M0.367608 0.173955C0.40875 0.726669 0.565185 1.25863 0.82287 1.72206C1.08055 2.1855 1.43142 2.5659 1.84395 2.8291C2.05584 2.96331 1.85237 3.33346 1.64186 3.20013C1.18722 2.90683 0.800162 2.48616 0.514501 1.97488C0.22884 1.4636 0.0532757 0.877268 0.00313544 0.267116C-0.00566119 0.210072 0.00421023 0.151206 0.0307527 0.102475C0.0572952 0.0537429 0.0985128 0.0188064 0.146028 0.00476307C0.194338 -0.00728405 0.244715 0.00373298 0.286204 0.0354149C0.327694 0.0670969 0.356948 0.116878 0.367608 0.173955Z",
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
              {...getOverrideProps(overrides, "Vector1507135")}
            ></Icon>
            <Icon
              width="57.65px"
              height="43.95px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 57.6484375,
                height: 43.9521484375,
              }}
              paths={[
                {
                  d: "M56.8883 26.2452C55.1041 16.0301 52.8737 12.6244 52.8737 12.6244L52.0217 11.842L50.997 10.8996L51.002 10.7784L50.7589 10.6806L50.7019 10.6281L50.6083 10.5431L50.5933 10.5622L50.5615 10.6011L45.9248 8.73499L40.0424 6.36911L37.3184 2.17689C36.8748 1.49413 36.3036 0.942293 35.6498 0.56464C34.9959 0.186987 34.277 -0.00622285 33.5495 0.000152812L24.8501 0.07637C23.6738 0.086677 22.5434 0.61761 21.681 1.56479L15.963 7.84481L7.05329 12.8832L7.03825 12.8654L6.94469 12.9445L5.56806 13.7239L5.62487 14.074L4.77282 14.802C4.77282 14.802 2.54248 17.971 0.758199 27.4761C0.304298 29.8946 0.0808716 35.0827 0.000226629 41.4758C-0.00382416 41.7992 0.0464645 42.1203 0.148167 42.4205C0.24987 42.7207 0.400959 42.9939 0.592648 43.2244C0.784337 43.4548 1.0128 43.6378 1.26476 43.7628C1.51672 43.8877 1.78714 43.9521 2.0603 43.9522L49.6487 43.9522L55.5884 43.9522C55.8614 43.952 56.1316 43.8877 56.3834 43.7629C56.6352 43.6381 56.8635 43.4553 57.0552 43.2251C57.2468 42.995 57.398 42.7221 57.4998 42.4222C57.6017 42.1223 57.6522 41.8015 57.6485 41.4783C57.5697 34.5216 57.3464 28.8681 56.8883 26.2452Z",
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
              {...getOverrideProps(overrides, "Vector1507136")}
            ></Icon>
            <Icon
              width="65.99px"
              height="16.53px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 65.98828125,
                height: 16.53173828125,
              }}
              paths={[
                {
                  d: "M6.98097 0C5.1295 4.31611e-15 3.35387 0.870861 2.04468 2.42101C0.735492 3.97115 0 6.0736 0 8.26584C0 10.4581 0.735492 12.5605 2.04468 14.1107C3.35387 15.6608 5.1295 16.5317 6.98097 16.5317L59.0059 16.5317C60.8573 16.5317 62.633 15.6608 63.9421 14.1107C65.2513 12.5605 65.9868 10.4581 65.9868 8.26584C65.9868 6.0736 65.2513 3.97115 63.9421 2.42101C62.633 0.870861 60.8573 4.31611e-15 59.0059 0L6.98097 0Z",
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
              {...getOverrideProps(overrides, "Vector1507137")}
            ></Icon>
            <Icon
              width="63.16px"
              height="13.19px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 63.16015625,
                height: 13.18603515625,
              }}
              paths={[
                {
                  d: "M5.56815 0C4.09139 0 2.67511 0.694616 1.63087 1.93104C0.586641 3.16747 0 4.84442 1.45808e-14 6.59299C0 8.34156 0.586641 10.0185 1.63087 11.2549C2.67511 12.4914 4.09139 13.186 5.56815 13.186L57.593 13.186C59.0698 13.186 60.4861 12.4914 61.5303 11.2549C62.5745 10.0185 63.1612 8.34156 63.1612 6.59299C63.1612 4.84442 62.5745 3.16747 61.5303 1.93104C60.4861 0.694616 59.0698 5.21114e-08 57.593 0L5.56815 0Z",
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
              {...getOverrideProps(overrides, "Vector1507138")}
            ></Icon>
            <Icon
              width="22.79px"
              height="26.99px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 22.79296875,
                height: 26.9892578125,
              }}
              paths={[
                {
                  d: "M11.397 26.9894C17.6914 26.9894 22.7941 20.9476 22.7941 13.4947C22.7941 6.04178 17.6914 0 11.397 0C5.10263 0 0 6.04178 0 13.4947C0 20.9476 5.10263 26.9894 11.397 26.9894Z",
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
              width="0.15px"
              height="0.38px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 0.14453125,
                height: 0.38232421875,
              }}
              paths={[
                {
                  d: "M0.145664 0.382106C0.0969742 0.255175 0.0484194 0.127807 0 0C0.0186623 0.000707667 0.0371344 0.00388433 0.0557903 0.00446292L0.145664 0.382106Z",
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
              {...getOverrideProps(overrides, "Vector1507140")}
            ></Icon>
            <Icon
              width="30.89px"
              height="31.64px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 30.88671875,
                height: 31.63623046875,
              }}
              paths={[
                {
                  d: "M4.46614 6.39471C5.04258 5.85025 5.71628 5.34928 6.45328 5.37744C7.19024 5.40556 7.9376 6.1937 7.78491 7.04786C9.13859 4.2099 11.2933 2.02719 13.8707 0.882842C16.4481 -0.261505 19.2836 -0.294357 21.8794 0.790055C23.7111 1.55524 25.5074 3.08605 25.9282 5.33129C26.0362 5.90765 26.0594 6.53962 26.3633 7.00765C26.7465 7.59773 27.4797 7.73122 28.0834 7.52364C28.0895 7.52156 28.0955 7.51946 28.1015 7.51733C28.2035 7.47609 28.3136 7.47204 28.4176 7.50569C28.5215 7.53935 28.6146 7.60916 28.6846 7.7061C28.7547 7.80305 28.7986 7.92266 28.8107 8.04946C28.8227 8.17627 28.8023 8.30445 28.7522 8.4174L28.2339 9.56189C28.8872 9.73432 29.5661 9.71722 30.2126 9.51206C30.32 9.47871 30.4335 9.48552 30.5375 9.53155C30.6415 9.57759 30.7309 9.6606 30.7935 9.76919C30.8561 9.87779 30.8888 10.0067 30.8871 10.1381C30.8854 10.2696 30.8493 10.3972 30.7839 10.5034C29.075 13.2816 26.2199 15.0756 23.3063 15.0545C21.2355 15.0395 19.1434 14.1945 17.1281 14.7583C16.3484 14.9765 15.6199 15.3985 14.996 15.9935C14.372 16.5885 13.8685 17.3413 13.5223 18.1968C13.1762 19.0522 12.9962 19.9886 12.9955 20.9372C12.9948 21.8857 13.1735 22.8225 13.5185 23.6786C12.8994 22.8768 11.7026 23.0666 11.0692 23.8528C10.4359 24.639 10.272 25.8124 10.3358 26.8962C10.4334 28.5539 10.9819 30.1158 11.5602 31.6361C6.71199 31.4554 2.12642 27.4285 0.58291 21.982C-0.967074 16.5128 0.657361 9.99232 4.46614 6.39471Z",
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
              {...getOverrideProps(overrides, "Vector1507141")}
            ></Icon>
            <Icon
              width="5.11px"
              height="20.79px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 5.11328125,
                height: 20.791015625,
              }}
              paths={[
                {
                  d: "M0 0L3.19661 20.5932L5.11465 20.791L0 0Z",
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
              {...getOverrideProps(overrides, "Vector1507142")}
            ></Icon>
            <Icon
              width="5.11px"
              height="22.34px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 5.11328125,
                height: 22.34423828125,
              }}
              paths={[
                {
                  d: "M5.11465 0L1.91804 22.1314L0 22.344L5.11465 0Z",
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
              {...getOverrideProps(overrides, "Vector1507143")}
            ></Icon>
            <Icon
              width="7.15px"
              height="14.98px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 7.14453125,
                height: 14.9833984375,
              }}
              paths={[
                {
                  d: "M6.42441 14.8719C5.8115 15.175 5.17196 14.8429 4.90375 14.0823C4.63144 13.3102 4.88577 12.5263 5.5085 12.2184C6.13129 11.9105 6.75944 12.2434 7.03614 13.028C7.3087 13.8009 7.05713 14.5591 6.42441 14.8719ZM5.25034 10.6985L4.76301 10.9395C4.64127 10.999 4.50511 11.0022 4.38146 10.9485C4.25782 10.8948 4.1557 10.7881 4.09531 10.6495L4.07121 10.5937C3.54684 9.47396 3.4868 8.1131 3.8937 6.55103C4.27064 5.14978 4.4272 4.16428 4.11235 3.27147C3.74832 2.23922 2.97097 1.91586 1.97969 2.38428C1.59522 2.57437 1.47288 2.57134 1.17032 2.92672C1.1045 3.00497 1.02606 3.06672 0.939653 3.10829C0.853249 3.14986 0.76066 3.17041 0.667406 3.1687C0.577256 3.16745 0.488244 3.14471 0.405676 3.10184C0.323109 3.05897 0.248677 2.99686 0.186821 2.9192C0.0676509 2.76953 0.000885741 2.5719 8.74987e-06 2.36621C-0.000868242 2.16052 0.0642089 1.9621 0.182096 1.81102C0.690648 1.18069 1.30402 0.682018 1.98352 0.346471C4.11337 -0.706569 5.18555 0.848093 5.6762 2.23937C6.1561 3.6002 5.88615 4.86282 5.45239 6.49804C5.0889 7.8568 5.11007 8.86363 5.52298 9.86473C5.55279 9.94041 5.56937 10.0225 5.57174 10.1059C5.5741 10.1894 5.56219 10.2725 5.53673 10.3504C5.51127 10.4283 5.47277 10.4993 5.42356 10.5591C5.37435 10.6189 5.31542 10.6664 5.25034 10.6985Z",
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
              {...getOverrideProps(overrides, "Vector1507144")}
            ></Icon>
            <Icon
              width="10.85px"
              height="0.59px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 10.8515625,
                height: 0.59033203125,
              }}
              paths={[
                {
                  d: "M10.602 0.590424L0.251021 0.590424C0.218137 0.590689 0.185534 0.583248 0.155089 0.568531C0.124643 0.553814 0.0969545 0.532113 0.0736225 0.504674C0.0502905 0.477235 0.0317756 0.444602 0.0191395 0.408654C0.0065034 0.372706 0 0.33415 0 0.295213C0 0.256276 0.0065034 0.217725 0.0191395 0.181777C0.0317756 0.145829 0.0502905 0.113196 0.0736225 0.085757C0.0969545 0.058318 0.124643 0.0366166 0.155089 0.0218997C0.185534 0.00718283 0.218137 -0.000258099 0.251021 6.83362e-06L10.602 6.83362e-06C10.6679 0.0005372 10.7308 0.0318703 10.7772 0.0871751C10.8236 0.14248 10.8497 0.217265 10.8497 0.295213C10.8497 0.373161 10.8236 0.447946 10.7772 0.503251C10.7308 0.558556 10.6679 0.589893 10.602 0.590424Z",
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
              {...getOverrideProps(overrides, "Vector1507145")}
            ></Icon>
            <Icon
              width="10.85px"
              height="0.59px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 10.8515625,
                height: 0.59033203125,
              }}
              paths={[
                {
                  d: "M10.602 0.590424L0.251021 0.590424C0.218137 0.590689 0.185534 0.583252 0.155089 0.568536C0.124643 0.553819 0.0969623 0.532113 0.0736303 0.504674C0.0502983 0.477235 0.0317756 0.444602 0.0191395 0.408654C0.0065034 0.372706 1.45808e-14 0.334155 0 0.295218C1.45808e-14 0.25628 0.0065034 0.217725 0.0191395 0.181777C0.0317756 0.145829 0.0502983 0.113196 0.0736303 0.085757C0.0969623 0.058318 0.124643 0.0366166 0.155089 0.0218997C0.185534 0.00718283 0.218137 -0.000258099 0.251021 6.83362e-06L10.602 6.83362e-06C10.6349 -0.000258099 10.6675 0.00718283 10.698 0.0218997C10.7284 0.0366166 10.7561 0.058318 10.7794 0.085757C10.8028 0.113196 10.8213 0.145829 10.8339 0.181777C10.8466 0.217725 10.8531 0.25628 10.8531 0.295218C10.8531 0.334155 10.8466 0.372706 10.8339 0.408654C10.8213 0.444602 10.8028 0.477235 10.7794 0.504674C10.7561 0.532113 10.7284 0.553819 10.698 0.568536C10.6675 0.583252 10.6349 0.590689 10.602 0.590424Z",
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
              {...getOverrideProps(overrides, "Vector1507146")}
            ></Icon>
            <Icon
              width="10.85px"
              height="0.59px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 10.8515625,
                height: 0.59033203125,
              }}
              paths={[
                {
                  d: "M10.5986 0.590424L0.247632 0.590424C0.181801 0.589893 0.118816 0.558556 0.0724248 0.503251C0.0260335 0.447946 1.45808e-14 0.373161 0 0.295213C1.45808e-14 0.217265 0.0260335 0.14248 0.0724248 0.0871751C0.118816 0.0318703 0.181801 0.0005372 0.247632 6.83362e-06L10.5986 6.83362e-06C10.6315 -0.000258099 10.6641 0.00718283 10.6946 0.0218997C10.725 0.0366166 10.7527 0.058318 10.776 0.085757C10.7994 0.113196 10.8179 0.145829 10.8305 0.181777C10.8432 0.217725 10.8497 0.256276 10.8497 0.295213C10.8497 0.33415 10.8432 0.372706 10.8305 0.408654C10.8179 0.444602 10.7994 0.477235 10.776 0.504674C10.7527 0.532113 10.725 0.553814 10.6946 0.568531C10.6641 0.583248 10.6315 0.590689 10.5986 0.590424Z",
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
              {...getOverrideProps(overrides, "Vector1507147")}
            ></Icon>
            <Icon
              width="10.85px"
              height="0.59px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 10.84765625,
                height: 0.59033203125,
              }}
              paths={[
                {
                  d: "M10.5986 0.590417L0.247632 0.590417C0.181801 0.589887 0.118824 0.558549 0.0724327 0.503244C0.0260413 0.447939 0 0.373154 0 0.295206C0 0.217258 0.0260413 0.142473 0.0724327 0.0871683C0.118824 0.0318635 0.181801 0.000530366 0.247632 0L10.5986 0C10.6645 0.000530366 10.7275 0.0318635 10.7739 0.0871683C10.8202 0.142473 10.8463 0.217258 10.8463 0.295206C10.8463 0.373154 10.8202 0.447939 10.7739 0.503244C10.7275 0.558549 10.6645 0.589887 10.5986 0.590417Z",
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
              {...getOverrideProps(overrides, "Vector1507148")}
            ></Icon>
            <Icon
              width="3.85px"
              height="4.56px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 3.84765625,
                height: 4.5556640625,
              }}
              paths={[
                {
                  d: "M1.92381 4.55579C2.98631 4.55579 3.84763 3.53594 3.84763 2.2779C3.84763 1.01985 2.98631 0 1.92381 0C0.861321 0 0 1.01985 0 2.2779C0 3.53594 0.861321 4.55579 1.92381 4.55579Z",
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
              {...getOverrideProps(overrides, "Vector1507149")}
            ></Icon>
            <Icon
              width="3.85px"
              height="4.56px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 3.84765625,
                height: 4.5556640625,
              }}
              paths={[
                {
                  d: "M1.92381 4.55579C2.98631 4.55579 3.84763 3.53594 3.84763 2.2779C3.84763 1.01985 2.98631 0 1.92381 0C0.861321 0 0 1.01985 0 2.2779C0 3.53594 0.861321 4.55579 1.92381 4.55579Z",
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
              {...getOverrideProps(overrides, "Vector1507150")}
            ></Icon>
            <Icon
              width="3.85px"
              height="4.56px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 3.84765625,
                height: 4.5556640625,
              }}
              paths={[
                {
                  d: "M1.92381 4.55579C2.98631 4.55579 3.84763 3.53594 3.84763 2.2779C3.84763 1.01985 2.98631 0 1.92381 0C0.861321 0 0 1.01985 0 2.2779C0 3.53594 0.861321 4.55579 1.92381 4.55579Z",
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
              {...getOverrideProps(overrides, "Vector1507151")}
            ></Icon>
            <Icon
              width="3.85px"
              height="4.56px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 3.84765625,
                height: 4.5556640625,
              }}
              paths={[
                {
                  d: "M1.92381 4.55579C2.98631 4.55579 3.84763 3.53594 3.84763 2.2779C3.84763 1.01985 2.98631 0 1.92381 0C0.861321 0 0 1.01985 0 2.2779C0 3.53594 0.861321 4.55579 1.92381 4.55579Z",
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
              {...getOverrideProps(overrides, "Vector1507152")}
            ></Icon>
          </View>
        </Flex>
        <Flex
          gap="0"
          direction="column"
          width="unset"
          height="87px"
          justifyContent="space-between"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Heading")}
        >
          <Text
            fontFamily="Inter"
            fontSize="24px"
            fontWeight="600"
            color="rgba(13,26,38,1)"
            lineHeight="30px"
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
            children="Congratulations !"
            {...getOverrideProps(overrides, "Congratulations !")}
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
            children="Your account is Verified Successfully &#xA;and ready to use"
            {...getOverrideProps(
              overrides,
              "Your account is Verified Successfully and ready to use"
            )}
          ></Text>
        </Flex>
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="40px"
          justifyContent="flex-end"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
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
