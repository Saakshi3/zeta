/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import { useState } from 'react';
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import LogoWithText from "./LogoWithText";
 
import {
  Button,
  CheckboxField,
  Divider,
  Flex,
  Icon,
  PasswordField,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";


export default function LoginPagePatient(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    // Validate the email using a regular expression
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
    setIsValidEmail(emailRegex.test(newEmail));
    };

    const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    // Perform password validation here (e.g., length requirements, complexity, etc.)
    // For simplicity, this example does not include password validation.
    // You should add your own password validation logic here.
    // For demonstration purposes, we'll assume the password is valid if it's not empty.
    setIsValidPassword(newPassword.length > 0);
    };

  const { overrides, ...rest } = props;
  return (
    // Main container of the page
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
      {...getOverrideProps(overrides, "LoginPagePatient")}
      {...rest}
    >
      {/* Frame 1 */}
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
        {/* Space between logo and Heading */}
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
          {/* The text of the logo */}
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

        {/* Main heading */}
        <Text
          fontFamily="'Inter'"
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
          children="Welcome !"
          {...getOverrideProps(overrides, "Welcome !")}
        ></Text>

        {/* Email field */}
        <TextField
          width="unset"
          height="unset"
          label="Email"
          placeholder="sarah@ABC.com"
          shrink="0"
          alignSelf="stretch"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          inputProps={{
            type: 'email',
            value: email,
            onChange: handleEmailChange,
          }}
        ></TextField>

        {!isValidEmail && (
          <div style={{ color: 'red' }}>
            Please enter a valid email address.
          </div>
        )}

        {/* Password field */}
        <PasswordField
          width="unset"
          height="unset"
          label="Password"
          placeholder="***********"
          shrink="0"
          alignSelf="stretch"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          hideShowPassword={true}
          inputProps={{
            type: 'password',
            value: password,
            onChange: handlePasswordChange,
          }}
          
          {...getOverrideProps(overrides, "PasswordField")}
        ></PasswordField>

        {!isValidPassword && (
          <div style={{ color: 'red' }}>
            Please enter a valid password.
          </div>
        )}

        {/* Space between password field and remember me */}
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
          {/* Remember me checkbox */}
          <CheckboxField
            width="unset"
            height="unset"
            label="Remember me"
            shrink="0"
            size="default"
            defaultChecked={true}
            isDisabled={false}
            labelPosition="end"
            style={{ color: '#043495' }}
            {...getOverrideProps(overrides, "CheckboxField")}
          ></CheckboxField>

          {/* Forgot password */}
          <Button
            color="#043495"
            width="unset"
            height="unset"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            variation="link"
            children="Forgot password"
            {...getOverrideProps(overrides, "Button438748")}
          ></Button>
        </Flex>

        {/* Gap between forgot password and Login button */}
        <Flex
          gap="16px"
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
          {...getOverrideProps(overrides, "cta")}
        >

          {/* Login Button */}
          <Button
            width="unset"
            height="40px"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            variation="primary"
            children="LOGIN"
            style={{ backgroundColor: '#043495' }}
            {...getOverrideProps(overrides, "Button438749")}
          ></Button>

          {/* Space */}
          <Flex
            gap="16px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 26086257")}
          >
            <Divider
              width="171px"
              height="6px"
              shrink="0"
              size="small"
              orientation="horizontal"
              {...getOverrideProps(overrides, "Divider438825")}
            ></Divider>

            {/* Text for the divider */}
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="400"
              color="rgba(92,102,112,1)"
              lineHeight="18px"
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
              children="or"
              {...getOverrideProps(overrides, "or")}
            ></Text>

            <Divider
              width="171px"
              height="6px"
              shrink="0"
              size="small"
              orientation="horizontal"
              {...getOverrideProps(overrides, "Divider438827")}
            ></Divider>
          </Flex>
          
          {/*spacing between the buttons */}
          <Flex
            gap="8px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Login Buttons")}
          >
            {/* Google button width */}
            <Button 
              gap="8px"
              direction="row"
              width="unset"
              height="48px"
              justifyContent="center"
              alignItems="center"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              borderRadius="8px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(233,241,255,1)"> 
            <Flex
              gap="8px"
              direction="row"
              width="unset"
              height="48px"
              justifyContent="center"
              alignItems="center"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              borderRadius="8px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(233,241,255,1)"
              {...getOverrideProps(overrides, "Button - Login Options438831")}
            >
               
              {/* Google Icon */}
              <View
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
                {...getOverrideProps(overrides, "google")}
              >
                <Icon
                  width="10.29px"
                  height="9.87px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 10.28515625,
                    height: 9.8701171875,
                  }}
                  paths={[
                    {
                      d: "M10.2857 2.14665C10.2857 1.28332 10.2142 0.653324 10.0595 0L0 0L0 3.89662L5.90471 3.89662C5.78571 4.86499 5.14285 6.32332 3.71425 7.30327L3.69423 7.43372L6.87486 9.84844L7.09522 9.87C9.11899 8.03831 10.2857 5.3433 10.2857 2.14665",
                      fill: "rgba(66,133,244,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="42.03%"
                  bottom="16.85%"
                  left="50.9%"
                  right="6.25%"
                  {...getOverrideProps(overrides, "vector438833")}
                ></Icon>
                <Icon
                  width="16.67px"
                  height="8.42px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 16.666015625,
                    height: 8.42333984375,
                  }}
                  paths={[
                    {
                      d: "M9.57142 8.42341C12.4642 8.42341 14.8928 7.49003 16.6666 5.88006L13.2857 3.31331C12.3809 3.93165 11.1666 4.36332 9.57142 4.36332C6.73811 4.36332 4.33338 2.53169 3.47616 0L3.35051 0.0104563L0.0432509 2.51882L0 2.63665C1.76188 6.06666 5.38092 8.42341 9.57142 8.42341Z",
                      fill: "rgba(52,168,83,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="58.65%"
                  bottom="6.25%"
                  left="11.01%"
                  right="19.54%"
                  {...getOverrideProps(overrides, "vector438834")}
                ></Icon>
                <Icon
                  width="4.62px"
                  height="9.48px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 4.619140625,
                    height: 9.477783203125,
                  }}
                  paths={[
                    {
                      d: "M4.619 6.84113C4.39281 6.1878 4.26191 5.48775 4.26191 4.76445C4.26191 4.04107 4.39281 3.3411 4.6071 2.68778L4.60111 2.54863L1.25239 0L1.14283 0.0510726C0.416671 1.47442 0 3.07279 0 4.76445C0 6.45611 0.416671 8.0544 1.14283 9.47775L4.619 6.84113",
                      fill: "rgba(251,188,5,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="30.15%"
                  bottom="30.36%"
                  left="6.25%"
                  right="74.5%"
                  {...getOverrideProps(overrides, "vector438835")}
                ></Icon>
                <Icon
                  width="16.74px"
                  height="8.42px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 16.73828125,
                    height: 8.42333984375,
                  }}
                  paths={[
                    {
                      d: "M9.57147 4.05997C11.5833 4.05997 12.9405 4.91163 13.7143 5.62335L16.7381 2.73C14.881 1.03834 12.4643 0 9.57147 0C5.38095 0 1.76189 2.35665 0 5.78662L3.46428 8.42332C4.33341 5.89166 6.73815 4.05997 9.57147 4.05997",
                      fill: "rgba(235,67,53,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="6.25%"
                  bottom="58.65%"
                  left="11.01%"
                  right="19.24%"
                  {...getOverrideProps(overrides, "vector438836")}
                ></Icon>
              </View>
               
              <Text
                fontFamily="Roboto"
                fontSize="12px"
                fontWeight="400"
                color="rgba(66,133,244,1)"
                lineHeight="14.0625px"
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
                children="Sign in with Google"
                {...getOverrideProps(overrides, "Sign in with Google")}
              ></Text>
            </Flex>
            </Button>
            <View
              width="48px"
              height="48px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Button - Login Options438838")}
            >
              <View
                width="48px"
                height="48px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0%"
                bottom="0%"
                left="0%"
                right="0%"
                borderRadius="9px"
                padding="0px 0px 0px 0px"
                backgroundColor="rgba(242,242,242,1)"
                {...getOverrideProps(overrides, "Rectangle 15")}
              ></View>
              <View
                width="22.59px"
                height="24px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="25%"
                bottom="25%"
                left="25.49%"
                right="27.45%"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Facebook")}
              >
                <Button 
                    width="24px"
                    height="24px"
                    style={{ backgroundColor: 'transparent', border: 'none' }}
                > 
                <Icon
                  width="13.09px"
                  height="24px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 13.091796875,
                    height: 24,
                  }}
                  paths={[
                    {
                      d: "M12.2331 13.3981L12.9115 9.08738L8.66751 9.08738L8.66751 6.29126C8.66751 5.11167 9.25927 3.96117 11.1602 3.96117L13.0909 3.96117L13.0909 0.291262C13.0909 0.291262 11.3395 0 9.66575 0C6.16892 0 3.88545 2.06503 3.88545 5.80194L3.88545 9.08738L0 9.08738L0 13.3981L3.88545 13.3981L3.88545 23.8194C4.6655 23.9389 5.46353 24 6.27648 24C7.08943 24 7.88746 23.9389 8.66751 23.8194L8.66751 13.3981L12.2331 13.3981Z",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="calc(50% - 12px - 0px)"
                  left="calc(50% - 6.55px - 0.75px)"
                  {...getOverrideProps(overrides, "f")}
                ></Icon>
                </Button>
              </View>
            </View>
            <View
              width="48px"
              height="48px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Button - Login Options438842")}
            >
              <View
                width="48px"
                height="48px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0%"
                bottom="0%"
                left="0%"
                right="0%"
                borderRadius="9px"
                padding="0px 0px 0px 0px"
                backgroundColor="rgba(242,242,242,1)"
                {...getOverrideProps(overrides, "Rectangle 16")}
              ></View> 
              <View
                width="21.4px"
                height="24px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                overflow="hidden"
                position="absolute"
                top="25%"
                bottom="25%"
                left="27.45%"
                right="27.97%"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "apple438844")}
              >
                <Button> 
                <Icon
                  width="19.89px"
                  height="24px"
                  viewBox={{ minX: 0, minY: 0, width: 19.89453125, height: 24 }}
                  paths={[
                    {
                      d: "M19.2725 8.18608C19.1639 8.25293 16.5795 9.66372 16.5795 12.7918C16.7013 16.3591 19.8409 17.6102 19.8947 17.6102C19.8409 17.677 19.4208 19.3144 18.1762 21.0308C17.1886 22.5093 16.0923 24 14.4276 24C12.8442 24 12.2758 23.0146 10.4487 23.0146C8.48657 23.0146 7.93139 24 6.42913 24C4.76446 24 3.58701 22.4295 2.54549 20.9648C1.1924 19.0479 0.0423159 16.0396 0.00171427 13.1512C-0.0256477 11.6206 0.272686 10.116 1.02999 8.83808C2.09888 7.05397 4.00715 5.84286 6.09107 5.80292C7.68778 5.74996 9.10883 6.8812 10.0833 6.8812C11.0171 6.8812 12.763 5.80292 14.7383 5.80292C15.591 5.80379 17.8647 6.05643 19.2725 8.18608ZM9.94823 5.49732C9.66402 4.09955 10.4487 2.70178 11.1795 1.81016C12.1134 0.731877 13.5882 0 14.8601 0C14.9413 1.39777 14.4268 2.76863 13.507 3.76704C12.6818 4.84532 11.2607 5.65707 9.94823 5.49732Z",
                      fill: "rgba(0,0,0,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="calc(50% - 12px - 0px)"
                  left="calc(50% - 9.95px - -0.25px)"
                  {...getOverrideProps(overrides, "apple438845")}
                ></Icon> 
              </Button>
              </View>
            </View>
          </Flex>
          {/* Space between the sign in google option and account */}
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
              style={{ border: 'none' }}
            ></Text>

            {/* Sign Up button */}
            <Button
              color="#043495"
              width="unset"
              height="unset"
              shrink="0"
              size="small"
              isDisabled={false}
              variation="link"
              children="Sign Up"
              {...getOverrideProps(overrides, "Button438752")}
            ></Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

 