/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { NavBarHeaderProps } from "./NavBarHeader";
import { SideBarProps } from "./SideBar";
import { AlertProps, DividerProps, FlexProps, HeadingProps, SearchFieldProps, SelectFieldProps, TextProps } from "@aws-amplify/ui-react";
import { ItemCardProps } from "./ItemCard";
import { DataRowProps } from "./DataRow";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DashboardProviderTestRunOverridesProps = {
    DashboardProviderTestRun?: PrimitiveOverrideProps<FlexProps>;
    NavBarHeader?: NavBarHeaderProps;
    main?: PrimitiveOverrideProps<FlexProps>;
    SideBar?: SideBarProps;
    Body?: PrimitiveOverrideProps<FlexProps>;
    "Div 1"?: PrimitiveOverrideProps<FlexProps>;
    Overview38825798?: PrimitiveOverrideProps<FlexProps>;
    "Header Title"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 31338805786"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 2608614538805797"?: PrimitiveOverrideProps<FlexProps>;
    Heading38805792?: PrimitiveOverrideProps<HeadingProps>;
    Overview38464457?: PrimitiveOverrideProps<FlexProps>;
    Heading38464453?: PrimitiveOverrideProps<HeadingProps>;
    "Frame 26086147"?: PrimitiveOverrideProps<FlexProps>;
    ItemCard38464560?: ItemCardProps;
    ItemCard38854839?: ItemCardProps;
    "Frame 26086148"?: PrimitiveOverrideProps<FlexProps>;
    ItemCard38464576?: ItemCardProps;
    ItemCard38464584?: ItemCardProps;
    Notification?: PrimitiveOverrideProps<FlexProps>;
    Notifications?: PrimitiveOverrideProps<FlexProps>;
    Heading38464503?: PrimitiveOverrideProps<HeadingProps>;
    Divider38854835?: PrimitiveOverrideProps<DividerProps>;
    "2nd December 2021"?: PrimitiveOverrideProps<TextProps>;
    Divider38854837?: PrimitiveOverrideProps<DividerProps>;
    "Frame 26086149"?: PrimitiveOverrideProps<FlexProps>;
    Alert38464409?: PrimitiveOverrideProps<AlertProps>;
    Alert38464418?: PrimitiveOverrideProps<AlertProps>;
    Alert38464427?: PrimitiveOverrideProps<AlertProps>;
    Alert38845834?: PrimitiveOverrideProps<AlertProps>;
    Alert38845807?: PrimitiveOverrideProps<AlertProps>;
    "Div 2"?: PrimitiveOverrideProps<FlexProps>;
    List?: PrimitiveOverrideProps<FlexProps>;
    Heading38857298?: PrimitiveOverrideProps<FlexProps>;
    "Frame 31338857294"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 2608614538857295"?: PrimitiveOverrideProps<FlexProps>;
    Heading38857296?: PrimitiveOverrideProps<HeadingProps>;
    SearchField?: PrimitiveOverrideProps<SearchFieldProps>;
    Divider38464510?: PrimitiveOverrideProps<DividerProps>;
    Heading38848475?: PrimitiveOverrideProps<FlexProps>;
    SelectField38848476?: PrimitiveOverrideProps<SelectFieldProps>;
    SelectField38869193?: PrimitiveOverrideProps<SelectFieldProps>;
    SelectField38848477?: PrimitiveOverrideProps<SelectFieldProps>;
    SelectField38848478?: PrimitiveOverrideProps<SelectFieldProps>;
    SelectField38848479?: PrimitiveOverrideProps<SelectFieldProps>;
    SelectField38848480?: PrimitiveOverrideProps<SelectFieldProps>;
    SelectField38848481?: PrimitiveOverrideProps<SelectFieldProps>;
    SelectField38848482?: PrimitiveOverrideProps<SelectFieldProps>;
    Divider38464512?: PrimitiveOverrideProps<DividerProps>;
    "Frame 26086151"?: PrimitiveOverrideProps<FlexProps>;
    DataRow38464509?: DataRowProps;
    DataRow38464511?: DataRowProps;
    DataRow38464513?: DataRowProps;
    DataRow38857117?: DataRowProps;
    DataRow38857137?: DataRowProps;
} & EscapeHatchProps;
export declare type DashboardProviderTestRunProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: DashboardProviderTestRunOverridesProps | undefined | null;
}>;
export default function DashboardProviderTestRun(props: DashboardProviderTestRunProps): React.ReactElement;
