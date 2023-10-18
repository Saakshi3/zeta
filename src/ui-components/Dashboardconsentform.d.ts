/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DashboardconsentformOverridesProps = {
    Dashboardconsentform?: PrimitiveOverrideProps<FlexProps>;
    "Frame 429"?: PrimitiveOverrideProps<FlexProps>;
    NEW?: PrimitiveOverrideProps<TextProps>;
    "Consent Forms"?: PrimitiveOverrideProps<TextProps>;
    "3 Forms await your signature"?: PrimitiveOverrideProps<TextProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Frame 26086253"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 137"?: PrimitiveOverrideProps<FlexProps>;
    "Please fill out your forms soon. These forms will expire in 30 Days."?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type DashboardconsentformProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: DashboardconsentformOverridesProps | undefined | null;
}>;
export default function Dashboardconsentform(props: DashboardconsentformProps): React.ReactElement;
