/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, HeadingProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { ContactUsProps } from "./ContactUs";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContactPageOverridesProps = {
    ContactPage?: PrimitiveOverrideProps<FlexProps>;
    NavBarHeader2?: PrimitiveOverrideProps<FlexProps>;
    "Frame 437639353516"?: PrimitiveOverrideProps<FlexProps>;
    Heading?: PrimitiveOverrideProps<HeadingProps>;
    "We love to hear from our customers"?: PrimitiveOverrideProps<TextProps>;
    "Frame 4374"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 437739363309"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 4375"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon39353520?: PrimitiveOverrideProps<ViewProps>;
    "By email"?: PrimitiveOverrideProps<TextProps>;
    "hello@amplify.aws"?: PrimitiveOverrideProps<TextProps>;
    "Frame 437639363304"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon39363305?: PrimitiveOverrideProps<ViewProps>;
    "By phone"?: PrimitiveOverrideProps<TextProps>;
    "+1 (123) 456-7890"?: PrimitiveOverrideProps<TextProps>;
    "Frame 437739363319"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon39363320?: PrimitiveOverrideProps<ViewProps>;
    "In person"?: PrimitiveOverrideProps<TextProps>;
    "123 Main Street Anytown, USA 12345"?: PrimitiveOverrideProps<TextProps>;
    ContactUs?: ContactUsProps;
} & EscapeHatchProps;
export declare type ContactPageProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ContactPageOverridesProps | undefined | null;
}>;
export default function ContactPage(props: ContactPageProps): React.ReactElement;
