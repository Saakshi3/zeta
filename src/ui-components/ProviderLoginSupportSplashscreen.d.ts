/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProviderLoginSupportSplashscreenOverridesProps = {
    ProviderLoginSupportSplashscreen?: PrimitiveOverrideProps<FlexProps>;
    "Frame 3"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 26086262911393"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 26086262911396"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon?: MyIconProps;
    "Frame 1"?: PrimitiveOverrideProps<FlexProps>;
    "Group 26086148"?: PrimitiveOverrideProps<FlexProps>;
    Circle?: PrimitiveOverrideProps<IconProps>;
    "Check Icon"?: PrimitiveOverrideProps<IconProps>;
    Path?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 607"?: PrimitiveOverrideProps<IconProps>;
    Heading?: PrimitiveOverrideProps<FlexProps>;
    "Your Email Sent Successfully"?: PrimitiveOverrideProps<TextProps>;
    "Our support team will get back to you Shortly"?: PrimitiveOverrideProps<TextProps>;
    "Frame 26086260"?: PrimitiveOverrideProps<FlexProps>;
    "sign up"?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type ProviderLoginSupportSplashscreenProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ProviderLoginSupportSplashscreenOverridesProps | undefined | null;
}>;
export default function ProviderLoginSupportSplashscreen(props: ProviderLoginSupportSplashscreenProps): React.ReactElement;
