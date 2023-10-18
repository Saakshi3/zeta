/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BadgeProps, FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProviderStatusOverridesProps = {
    ProviderStatus?: PrimitiveOverrideProps<FlexProps>;
    Badge?: PrimitiveOverrideProps<BadgeProps>;
} & EscapeHatchProps;
export declare type ProviderStatusProps = React.PropsWithChildren<Partial<FlexProps> & {
    property1?: "Approved" | "Default" | "Draft" | "Expired" | "Support" | "Unsigned";
} & {
    overrides?: ProviderStatusOverridesProps | undefined | null;
}>;
export default function ProviderStatus(props: ProviderStatusProps): React.ReactElement;
