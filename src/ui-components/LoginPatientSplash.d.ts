/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LoginPatientSplashOverridesProps = {
    LoginPatientSplash?: PrimitiveOverrideProps<ViewProps>;
    "Group 26086145"?: PrimitiveOverrideProps<ViewProps>;
    "national-cancer-institute-L8tWZT4CcVQ-unsplash 1"?: PrimitiveOverrideProps<ImageProps>;
    "Background Tint"?: PrimitiveOverrideProps<ViewProps>;
    "Group 416"?: PrimitiveOverrideProps<ViewProps>;
    "Group 414"?: PrimitiveOverrideProps<ViewProps>;
    "Zeta eConsent System"?: PrimitiveOverrideProps<TextProps>;
    "Group 417"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 78"?: PrimitiveOverrideProps<ViewProps>;
    "Group 415"?: PrimitiveOverrideProps<ViewProps>;
    "Z Logo"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type LoginPatientSplashProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: LoginPatientSplashOverridesProps | undefined | null;
}>;
export default function LoginPatientSplash(props: LoginPatientSplashProps): React.ReactElement;
