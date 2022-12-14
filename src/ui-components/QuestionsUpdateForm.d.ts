/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Questions } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type QuestionsUpdateFormInputValues = {
    questionName?: string;
    questionDescription?: string;
    min?: number;
    max?: number;
};
export declare type QuestionsUpdateFormValidationValues = {
    questionName?: ValidationFunction<string>;
    questionDescription?: ValidationFunction<string>;
    min?: ValidationFunction<number>;
    max?: ValidationFunction<number>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type QuestionsUpdateFormOverridesProps = {
    QuestionsUpdateFormGrid?: FormProps<GridProps>;
    questionName?: FormProps<TextFieldProps>;
    questionDescription?: FormProps<TextFieldProps>;
    min?: FormProps<TextFieldProps>;
    max?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type QuestionsUpdateFormProps = React.PropsWithChildren<{
    overrides?: QuestionsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    questions?: Questions;
    onSubmit?: (fields: QuestionsUpdateFormInputValues) => QuestionsUpdateFormInputValues;
    onSuccess?: (fields: QuestionsUpdateFormInputValues) => void;
    onError?: (fields: QuestionsUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: QuestionsUpdateFormInputValues) => QuestionsUpdateFormInputValues;
    onValidate?: QuestionsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function QuestionsUpdateForm(props: QuestionsUpdateFormProps): React.ReactElement;
