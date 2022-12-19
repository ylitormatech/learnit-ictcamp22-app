/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { UserAnswers } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserAnswersUpdateFormInputValues = {
    selectionID?: string;
    questionID?: string;
    value?: number;
    userID?: string;
};
export declare type UserAnswersUpdateFormValidationValues = {
    selectionID?: ValidationFunction<string>;
    questionID?: ValidationFunction<string>;
    value?: ValidationFunction<number>;
    userID?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserAnswersUpdateFormOverridesProps = {
    UserAnswersUpdateFormGrid?: FormProps<GridProps>;
    selectionID?: FormProps<TextFieldProps>;
    questionID?: FormProps<TextFieldProps>;
    value?: FormProps<TextFieldProps>;
    userID?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserAnswersUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserAnswersUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    userAnswers?: UserAnswers;
    onSubmit?: (fields: UserAnswersUpdateFormInputValues) => UserAnswersUpdateFormInputValues;
    onSuccess?: (fields: UserAnswersUpdateFormInputValues) => void;
    onError?: (fields: UserAnswersUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: UserAnswersUpdateFormInputValues) => UserAnswersUpdateFormInputValues;
    onValidate?: UserAnswersUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserAnswersUpdateForm(props: UserAnswersUpdateFormProps): React.ReactElement;
