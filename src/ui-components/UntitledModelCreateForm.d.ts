/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UntitledModelCreateFormInputValues = {
    questionName?: string;
    questionDescription?: string;
    min?: number;
    max?: string;
};
export declare type UntitledModelCreateFormValidationValues = {
    questionName?: ValidationFunction<string>;
    questionDescription?: ValidationFunction<string>;
    min?: ValidationFunction<number>;
    max?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UntitledModelCreateFormOverridesProps = {
    UntitledModelCreateFormGrid?: FormProps<GridProps>;
    questionName?: FormProps<TextFieldProps>;
    questionDescription?: FormProps<TextFieldProps>;
    min?: FormProps<TextFieldProps>;
    max?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UntitledModelCreateFormProps = React.PropsWithChildren<{
    overrides?: UntitledModelCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UntitledModelCreateFormInputValues) => UntitledModelCreateFormInputValues;
    onSuccess?: (fields: UntitledModelCreateFormInputValues) => void;
    onError?: (fields: UntitledModelCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: UntitledModelCreateFormInputValues) => UntitledModelCreateFormInputValues;
    onValidate?: UntitledModelCreateFormValidationValues;
} & React.CSSProperties>;
export default function UntitledModelCreateForm(props: UntitledModelCreateFormProps): React.ReactElement;
