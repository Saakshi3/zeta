/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProviderLoginForgotPasswordOverridesProps = {
    ProviderLoginForgotPassword?: PrimitiveOverrideProps<FlexProps>;
    "Frame 3"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 26086262911419"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 26086262911422"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon?: MyIconProps;
    "Frame 1"?: PrimitiveOverrideProps<FlexProps>;
    Heading?: PrimitiveOverrideProps<FlexProps>;
    "Forgot Password"?: PrimitiveOverrideProps<TextProps>;
    "Please enter your Email, When creating your account We \u2018ll send you link to reset your password."?: PrimitiveOverrideProps<TextProps>;
    TextField?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 26086261"?: PrimitiveOverrideProps<FlexProps>;
    Button911430?: PrimitiveOverrideProps<ButtonProps>;
    "sign up"?: PrimitiveOverrideProps<FlexProps>;
    Button911432?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type ProviderLoginForgotPasswordProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ProviderLoginForgotPasswordOverridesProps | undefined | null;
}>;
export default function ProviderLoginForgotPassword(props: ProviderLoginForgotPasswordProps): React.ReactElement;
