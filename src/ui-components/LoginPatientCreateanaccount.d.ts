/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { LogoWithTextProps } from "./LogoWithText";
import { ButtonProps, FlexProps, PasswordFieldProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LoginPatientCreateanaccountOverridesProps = {
    LoginPatientCreateanaccount?: PrimitiveOverrideProps<FlexProps>;
    "Frame 1"?: PrimitiveOverrideProps<FlexProps>;
    Logo?: PrimitiveOverrideProps<FlexProps>;
    LogoWithText?: LogoWithTextProps;
    "Frame 26086258"?: PrimitiveOverrideProps<FlexProps>;
    "Create an Account"?: PrimitiveOverrideProps<TextProps>;
    labels?: PrimitiveOverrideProps<FlexProps>;
    TextField678868?: PrimitiveOverrideProps<TextFieldProps>;
    TextField678895?: PrimitiveOverrideProps<TextFieldProps>;
    PasswordField?: PrimitiveOverrideProps<PasswordFieldProps>;
    CTA?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type LoginPatientCreateanaccountProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: LoginPatientCreateanaccountOverridesProps | undefined | null;
}>;
export default function LoginPatientCreateanaccount(props: LoginPatientCreateanaccountProps): React.ReactElement;
