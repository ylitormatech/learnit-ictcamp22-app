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
export declare type SelectionCreateFormInputValues = {
    questionID?: string;
    description?: string;
    value?: number;
};
export declare type SelectionCreateFormValidationValues = {
    questionID?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    value?: ValidationFunction<number>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SelectionCreateFormOverridesProps = {
    SelectionCreateFormGrid?: FormProps<GridProps>;
    questionID?: FormProps<TextFieldProps>;
    description?: FormProps<TextFieldProps>;
    value?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SelectionCreateFormProps = React.PropsWithChildren<{
    overrides?: SelectionCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SelectionCreateFormInputValues) => SelectionCreateFormInputValues;
    onSuccess?: (fields: SelectionCreateFormInputValues) => void;
    onError?: (fields: SelectionCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: SelectionCreateFormInputValues) => SelectionCreateFormInputValues;
    onValidate?: SelectionCreateFormValidationValues;
} & React.CSSProperties>;
export default function SelectionCreateForm(props: SelectionCreateFormProps): React.ReactElement;
