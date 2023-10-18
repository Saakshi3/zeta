/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { LogoWithTextProps } from "./LogoWithText";
import { ButtonProps, CheckboxFieldProps, DividerProps, FlexProps, IconProps, PasswordFieldProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LoginPagePatientOverridesProps = {
    LoginPagePatient?: PrimitiveOverrideProps<FlexProps>;
    "Frame 1"?: PrimitiveOverrideProps<FlexProps>;
    Logo?: PrimitiveOverrideProps<FlexProps>;
    LogoWithText?: LogoWithTextProps;
    "Welcome !"?: PrimitiveOverrideProps<TextProps>;
    TextField?: PrimitiveOverrideProps<TextFieldProps>;
    PasswordField?: PrimitiveOverrideProps<PasswordFieldProps>;
    "Frame 4372"?: PrimitiveOverrideProps<FlexProps>;
    CheckboxField?: PrimitiveOverrideProps<CheckboxFieldProps>;
    Button438748?: PrimitiveOverrideProps<ButtonProps>;
    cta?: PrimitiveOverrideProps<FlexProps>;
    Button438749?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 26086257"?: PrimitiveOverrideProps<FlexProps>;
    Divider438825?: PrimitiveOverrideProps<DividerProps>;
    or?: PrimitiveOverrideProps<TextProps>;
    Divider438827?: PrimitiveOverrideProps<DividerProps>;
    "Login Buttons"?: PrimitiveOverrideProps<FlexProps>;
    "Button - Login Options438831"?: PrimitiveOverrideProps<FlexProps>;
    google?: PrimitiveOverrideProps<ViewProps>;
    vector438833?: PrimitiveOverrideProps<IconProps>;
    vector438834?: PrimitiveOverrideProps<IconProps>;
    vector438835?: PrimitiveOverrideProps<IconProps>;
    vector438836?: PrimitiveOverrideProps<IconProps>;
    "Sign in with Google"?: PrimitiveOverrideProps<TextProps>;
    "Button - Login Options438838"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 15"?: PrimitiveOverrideProps<ViewProps>;
    Facebook?: PrimitiveOverrideProps<ViewProps>;
    f?: PrimitiveOverrideProps<IconProps>;
    "Button - Login Options438842"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 16"?: PrimitiveOverrideProps<ViewProps>;
    apple438844?: PrimitiveOverrideProps<ViewProps>;
    apple438845?: PrimitiveOverrideProps<IconProps>;
    "sign up"?: PrimitiveOverrideProps<FlexProps>;
    "Don't have an account?"?: PrimitiveOverrideProps<TextProps>;
    Button438752?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type LoginPagePatientProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: LoginPagePatientOverridesProps | undefined | null;
}>;
export default function LoginPagePatient(props: LoginPagePatientProps): React.ReactElement;
