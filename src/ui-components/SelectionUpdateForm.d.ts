/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Selection } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SelectionUpdateFormInputValues = {
    questionID?: string;
    description?: string;
    value?: number;
};
export declare type SelectionUpdateFormValidationValues = {
    questionID?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    value?: ValidationFunction<number>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SelectionUpdateFormOverridesProps = {
    SelectionUpdateFormGrid?: FormProps<GridProps>;
    questionID?: FormProps<TextFieldProps>;
    description?: FormProps<TextFieldProps>;
    value?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SelectionUpdateFormProps = React.PropsWithChildren<{
    overrides?: SelectionUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    selection?: Selection;
    onSubmit?: (fields: SelectionUpdateFormInputValues) => SelectionUpdateFormInputValues;
    onSuccess?: (fields: SelectionUpdateFormInputValues) => void;
    onError?: (fields: SelectionUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: SelectionUpdateFormInputValues) => SelectionUpdateFormInputValues;
    onValidate?: SelectionUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SelectionUpdateForm(props: SelectionUpdateFormProps): React.ReactElement;
