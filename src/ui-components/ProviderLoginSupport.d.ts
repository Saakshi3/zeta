/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, TextAreaFieldProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProviderLoginSupportOverridesProps = {
    ProviderLoginSupport?: PrimitiveOverrideProps<FlexProps>;
    "Frame 3"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 26086262"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 1"?: PrimitiveOverrideProps<FlexProps>;
    Heading?: PrimitiveOverrideProps<FlexProps>;
    "Help & Support"?: PrimitiveOverrideProps<TextProps>;
    "Have a question or need assistance? We're here to help! Please use the form below to send us a message, and our support team will get back to you as soon as possible."?: PrimitiveOverrideProps<TextProps>;
    "Frame 26086259"?: PrimitiveOverrideProps<FlexProps>;
    TextField911183?: PrimitiveOverrideProps<TextFieldProps>;
    TextField911184?: PrimitiveOverrideProps<TextFieldProps>;
    TextField911185?: PrimitiveOverrideProps<TextFieldProps>;
    TextAreaField?: PrimitiveOverrideProps<TextAreaFieldProps>;
    "Frame 26086260"?: PrimitiveOverrideProps<FlexProps>;
    Button911188?: PrimitiveOverrideProps<ButtonProps>;
    "sign up"?: PrimitiveOverrideProps<FlexProps>;
    Button911190?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type ProviderLoginSupportProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ProviderLoginSupportOverridesProps | undefined | null;
}>;
export default function ProviderLoginSupport(props: ProviderLoginSupportProps): React.ReactElement;
