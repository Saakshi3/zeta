/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
import { ProviderStatusProps } from "./ProviderStatus";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DataRowOverridesProps = {
    DataRow?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 1163"?: PrimitiveOverrideProps<ImageProps>;
    Name38855534?: PrimitiveOverrideProps<FlexProps>;
    label39163130?: PrimitiveOverrideProps<TextProps>;
    label38855467?: PrimitiveOverrideProps<TextProps>;
    Name38855607?: PrimitiveOverrideProps<FlexProps>;
    label38855608?: PrimitiveOverrideProps<TextProps>;
    label38855609?: PrimitiveOverrideProps<TextProps>;
    Provider_Status?: ProviderStatusProps;
    Name38855706?: PrimitiveOverrideProps<FlexProps>;
    label38855707?: PrimitiveOverrideProps<TextProps>;
    label38855708?: PrimitiveOverrideProps<TextProps>;
    "Latest Activity39163131"?: PrimitiveOverrideProps<TextProps>;
    "Latest Activity38857002"?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type DataRowProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: DataRowOverridesProps | undefined | null;
}>;
export default function DataRow(props: DataRowProps): React.ReactElement;
