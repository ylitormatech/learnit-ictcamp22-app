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
export declare type UserAnswersCreateFormInputValues = {
    selectionID?: string;
    questionID?: string;
    value?: number;
};
export declare type UserAnswersCreateFormValidationValues = {
    selectionID?: ValidationFunction<string>;
    questionID?: ValidationFunction<string>;
    value?: ValidationFunction<number>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserAnswersCreateFormOverridesProps = {
    UserAnswersCreateFormGrid?: FormProps<GridProps>;
    selectionID?: FormProps<TextFieldProps>;
    questionID?: FormProps<TextFieldProps>;
    value?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserAnswersCreateFormProps = React.PropsWithChildren<{
    overrides?: UserAnswersCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserAnswersCreateFormInputValues) => UserAnswersCreateFormInputValues;
    onSuccess?: (fields: UserAnswersCreateFormInputValues) => void;
    onError?: (fields: UserAnswersCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: UserAnswersCreateFormInputValues) => UserAnswersCreateFormInputValues;
    onValidate?: UserAnswersCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserAnswersCreateForm(props: UserAnswersCreateFormProps): React.ReactElement;
