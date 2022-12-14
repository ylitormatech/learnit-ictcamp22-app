/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { UserAnswers } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function UserAnswersUpdateForm(props) {
  const {
    id,
    userAnswers,
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
    selectionID: undefined,
    questionID: undefined,
    value: undefined,
    userID: undefined,
  };
  const [selectionID, setSelectionID] = React.useState(
    initialValues.selectionID
  );
  const [questionID, setQuestionID] = React.useState(initialValues.questionID);
  const [value, setValue] = React.useState(initialValues.value);
  const [userID, setUserID] = React.useState(initialValues.userID);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...userAnswersRecord };
    setSelectionID(cleanValues.selectionID);
    setQuestionID(cleanValues.questionID);
    setValue(cleanValues.value);
    setUserID(cleanValues.userID);
    setErrors({});
  };
  const [userAnswersRecord, setUserAnswersRecord] = React.useState(userAnswers);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(UserAnswers, id) : userAnswers;
      setUserAnswersRecord(record);
    };
    queryData();
  }, [id, userAnswers]);
  React.useEffect(resetStateValues, [userAnswersRecord]);
  const validations = {
    selectionID: [],
    questionID: [],
    value: [],
    userID: [],
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
          selectionID,
          questionID,
          value,
          userID,
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
            UserAnswers.copyOf(userAnswersRecord, (updated) => {
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
      {...getOverrideProps(overrides, "UserAnswersUpdateForm")}
    >
      <TextField
        label="Selection id"
        isRequired={false}
        isReadOnly={false}
        defaultValue={selectionID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              selectionID: value,
              questionID,
              value,
              userID,
            };
            const result = onChange(modelFields);
            value = result?.selectionID ?? value;
          }
          if (errors.selectionID?.hasError) {
            runValidationTasks("selectionID", value);
          }
          setSelectionID(value);
        }}
        onBlur={() => runValidationTasks("selectionID", selectionID)}
        errorMessage={errors.selectionID?.errorMessage}
        hasError={errors.selectionID?.hasError}
        {...getOverrideProps(overrides, "selectionID")}
      ></TextField>
      <TextField
        label="Question id"
        isRequired={false}
        isReadOnly={false}
        defaultValue={questionID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              selectionID,
              questionID: value,
              value,
              userID,
            };
            const result = onChange(modelFields);
            value = result?.questionID ?? value;
          }
          if (errors.questionID?.hasError) {
            runValidationTasks("questionID", value);
          }
          setQuestionID(value);
        }}
        onBlur={() => runValidationTasks("questionID", questionID)}
        errorMessage={errors.questionID?.errorMessage}
        hasError={errors.questionID?.hasError}
        {...getOverrideProps(overrides, "questionID")}
      ></TextField>
      <TextField
        label="Value"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        defaultValue={value}
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              value: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              selectionID,
              questionID,
              value: value,
              userID,
            };
            const result = onChange(modelFields);
            value = result?.value ?? value;
          }
          if (errors.value?.hasError) {
            runValidationTasks("value", value);
          }
          setValue(value);
        }}
        onBlur={() => runValidationTasks("value", value)}
        errorMessage={errors.value?.errorMessage}
        hasError={errors.value?.hasError}
        {...getOverrideProps(overrides, "value")}
      ></TextField>
      <TextField
        label="User id"
        isRequired={false}
        isReadOnly={false}
        defaultValue={userID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              selectionID,
              questionID,
              value,
              userID: value,
            };
            const result = onChange(modelFields);
            value = result?.userID ?? value;
          }
          if (errors.userID?.hasError) {
            runValidationTasks("userID", value);
          }
          setUserID(value);
        }}
        onBlur={() => runValidationTasks("userID", userID)}
        errorMessage={errors.userID?.errorMessage}
        hasError={errors.userID?.hasError}
        {...getOverrideProps(overrides, "userID")}
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
