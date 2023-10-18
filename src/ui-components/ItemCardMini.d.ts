/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ItemCardMiniOverridesProps = {
    ItemCardMini?: PrimitiveOverrideProps<FlexProps>;
    "Frame 417"?: PrimitiveOverrideProps<FlexProps>;
    "01"?: PrimitiveOverrideProps<TextProps>;
    "Product Title"?: PrimitiveOverrideProps<FlexProps>;
    "Support Requests"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ItemCardMiniProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ItemCardMiniOverridesProps | undefined | null;
}>;
export default function ItemCardMini(props: ItemCardMiniProps): React.ReactElement;
