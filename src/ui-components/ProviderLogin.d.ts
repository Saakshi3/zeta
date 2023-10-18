/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, CheckboxFieldProps, FlexProps, PasswordFieldProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
import { LogoWithTextProps } from "./LogoWithText";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProviderLoginOverridesProps = {
    ProviderLogin?: PrimitiveOverrideProps<FlexProps>;
    "Frame 3"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 26086262"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 26086261"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon?: MyIconProps;
    "Frame 1"?: PrimitiveOverrideProps<FlexProps>;
    Logo?: PrimitiveOverrideProps<FlexProps>;
    LogoWithText?: LogoWithTextProps;
    Heading?: PrimitiveOverrideProps<FlexProps>;
    "Welcome!"?: PrimitiveOverrideProps<TextProps>;
    "Frame 26086259"?: PrimitiveOverrideProps<FlexProps>;
    TextField?: PrimitiveOverrideProps<TextFieldProps>;
    PasswordField?: PrimitiveOverrideProps<PasswordFieldProps>;
    "Frame 4372"?: PrimitiveOverrideProps<FlexProps>;
    CheckboxField?: PrimitiveOverrideProps<CheckboxFieldProps>;
    Button911346?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 26086260"?: PrimitiveOverrideProps<FlexProps>;
    Button911348?: PrimitiveOverrideProps<ButtonProps>;
    "sign up"?: PrimitiveOverrideProps<FlexProps>;
    "Don't have an account?"?: PrimitiveOverrideProps<TextProps>;
    Button911351?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type ProviderLoginProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ProviderLoginOverridesProps | undefined | null;
}>;
export default function ProviderLogin(props: ProviderLoginProps): React.ReactElement;
