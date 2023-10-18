/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps } from "@aws-amplify/ui-react";
import { HeroLayout1Props } from "./HeroLayout1";
import { MarketingPricingProps } from "./MarketingPricing";
import { Features2x2Props } from "./Features2x2";
import { CTASectionProps } from "./CTASection";
import { MarketingFooterProps } from "./MarketingFooter";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MarketingPageOverridesProps = {
    MarketingPage?: PrimitiveOverrideProps<FlexProps>;
    NavBarHeader2?: PrimitiveOverrideProps<FlexProps>;
    HeroLayout1?: HeroLayout1Props;
    MarketingPricing?: MarketingPricingProps;
    Features2x2?: Features2x2Props;
    CTASection?: CTASectionProps;
    MarketingFooter?: MarketingFooterProps;
} & EscapeHatchProps;
export declare type MarketingPageProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: MarketingPageOverridesProps | undefined | null;
}>;
export default function MarketingPage(props: MarketingPageProps): React.ReactElement;
