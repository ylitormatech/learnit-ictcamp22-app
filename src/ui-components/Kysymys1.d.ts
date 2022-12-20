/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, RadioGroupFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type Kysymys1InputValues = {
    Field0?: string;
    question?: string;
    selections?: string[];
};
export declare type Kysymys1ValidationValues = {
    Field0?: ValidationFunction<string>;
    question?: ValidationFunction<string>;
    selections?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Kysymys1OverridesProps = {
    Kysymys1Grid?: FormProps<GridProps>;
    Field0?: FormProps<RadioGroupFieldProps>;
    question?: FormProps<TextFieldProps>;
    selections?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type Kysymys1Props = React.PropsWithChildren<{
    overrides?: Kysymys1OverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: Kysymys1InputValues) => Kysymys1InputValues;
    onSuccess?: (fields: Kysymys1InputValues) => void;
    onError?: (fields: Kysymys1InputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: Kysymys1InputValues) => Kysymys1InputValues;
    onValidate?: Kysymys1ValidationValues;
} & React.CSSProperties>;
export default function Kysymys1(props: Kysymys1Props): React.ReactElement;
