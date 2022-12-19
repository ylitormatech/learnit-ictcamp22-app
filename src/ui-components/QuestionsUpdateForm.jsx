/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Questions } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function QuestionsUpdateForm(props) {
  const {
    id,
    questions,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    questionName: undefined,
    questionDescription: undefined,
    min: undefined,
    max: undefined,
  };
  const [questionName, setQuestionName] = React.useState(
    initialValues.questionName
  );
  const [questionDescription, setQuestionDescription] = React.useState(
    initialValues.questionDescription
  );
  const [min, setMin] = React.useState(initialValues.min);
  const [max, setMax] = React.useState(initialValues.max);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...questionsRecord };
    setQuestionName(cleanValues.questionName);
    setQuestionDescription(cleanValues.questionDescription);
    setMin(cleanValues.min);
    setMax(cleanValues.max);
    setErrors({});
  };
  const [questionsRecord, setQuestionsRecord] = React.useState(questions);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(Questions, id) : questions;
      setQuestionsRecord(record);
    };
    queryData();
  }, [id, questions]);
  React.useEffect(resetStateValues, [questionsRecord]);
  const validations = {
    questionName: [],
    questionDescription: [],
    min: [],
<<<<<<< HEAD
    max: [{ type: "Required" }],
=======
    max: [],
>>>>>>> e3d0c8f6f31c72d69653456acd98bf35b3d250b9
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          questionName,
          questionDescription,
          min,
          max,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          await DataStore.save(
            Questions.copyOf(questionsRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "QuestionsUpdateForm")}
    >
      <TextField
        label="Question name"
        isRequired={false}
        isReadOnly={false}
        defaultValue={questionName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              questionName: value,
              questionDescription,
              min,
              max,
            };
            const result = onChange(modelFields);
            value = result?.questionName ?? value;
          }
          if (errors.questionName?.hasError) {
            runValidationTasks("questionName", value);
          }
          setQuestionName(value);
        }}
        onBlur={() => runValidationTasks("questionName", questionName)}
        errorMessage={errors.questionName?.errorMessage}
        hasError={errors.questionName?.hasError}
        {...getOverrideProps(overrides, "questionName")}
      ></TextField>
      <TextField
        label="Question description"
        isRequired={false}
        isReadOnly={false}
        defaultValue={questionDescription}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              questionName,
              questionDescription: value,
              min,
              max,
            };
            const result = onChange(modelFields);
            value = result?.questionDescription ?? value;
          }
          if (errors.questionDescription?.hasError) {
            runValidationTasks("questionDescription", value);
          }
          setQuestionDescription(value);
        }}
        onBlur={() =>
          runValidationTasks("questionDescription", questionDescription)
        }
        errorMessage={errors.questionDescription?.errorMessage}
        hasError={errors.questionDescription?.hasError}
        {...getOverrideProps(overrides, "questionDescription")}
      ></TextField>
      <TextField
        label="Min"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        defaultValue={min}
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              min: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              questionName,
              questionDescription,
              min: value,
              max,
            };
            const result = onChange(modelFields);
            value = result?.min ?? value;
          }
          if (errors.min?.hasError) {
            runValidationTasks("min", value);
          }
          setMin(value);
        }}
        onBlur={() => runValidationTasks("min", min)}
        errorMessage={errors.min?.errorMessage}
        hasError={errors.min?.hasError}
        {...getOverrideProps(overrides, "min")}
      ></TextField>
      <TextField
        label="Max"
<<<<<<< HEAD
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        defaultValue={max}
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              max: "Value must be a valid number",
            }));
            return;
          }
=======
        isRequired={false}
        isReadOnly={false}
        defaultValue={max}
        onChange={(e) => {
          let { value } = e.target;
>>>>>>> e3d0c8f6f31c72d69653456acd98bf35b3d250b9
          if (onChange) {
            const modelFields = {
              questionName,
              questionDescription,
              min,
              max: value,
            };
            const result = onChange(modelFields);
            value = result?.max ?? value;
          }
          if (errors.max?.hasError) {
            runValidationTasks("max", value);
          }
          setMax(value);
        }}
        onBlur={() => runValidationTasks("max", max)}
        errorMessage={errors.max?.errorMessage}
        hasError={errors.max?.hasError}
        {...getOverrideProps(overrides, "max")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
