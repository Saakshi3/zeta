/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconKPIProps } from "./IconKPI";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ItemCardOverridesProps = {
    "30"?: PrimitiveOverrideProps<TextProps>;
    ItemCard?: PrimitiveOverrideProps<FlexProps>;
    "Frame 417"?: PrimitiveOverrideProps<FlexProps>;
    "icon - KPI "?: IconKPIProps;
    "Product Title"?: PrimitiveOverrideProps<FlexProps>;
    "Today\u2019s Appointment"?: PrimitiveOverrideProps<TextProps>;
    MyIcon?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type ItemCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    type?: "Default" | "Type4" | "example 2" | "example3";
} & {
    overrides?: ItemCardOverridesProps | undefined | null;
}>;
export default function ItemCard(props: ItemCardProps): React.ReactElement;
