/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LoginPatientOnboardingOverridesProps = {
    LoginPatientOnboarding03?: PrimitiveOverrideProps<ViewProps>;
    "national-cancer-institute-L8tWZT4CcVQ-unsplash 1"?: PrimitiveOverrideProps<ImageProps>;
    "Background Tint"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 1"?: PrimitiveOverrideProps<FlexProps>;
    Heading?: PrimitiveOverrideProps<FlexProps>;
    "Welcome to Best-in-Class eConsent"?: PrimitiveOverrideProps<TextProps>;
    "Seamlessly manage consent, protect your privacy, and follow the best procedures."?: PrimitiveOverrideProps<TextProps>;
    CTA?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type LoginPatientOnboardingProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: LoginPatientOnboardingOverridesProps | undefined | null;
}>;
export default function LoginPatientOnboarding03(props: LoginPatientOnboardingProps): React.ReactElement;
