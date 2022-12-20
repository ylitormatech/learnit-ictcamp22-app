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
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
}) {
  const { tokens } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      (currentFieldValue !== undefined ||
        currentFieldValue !== null ||
        currentFieldValue !== "") &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  return (
    <React.Fragment>
      {isEditing && children}
      {!isEditing ? (
        <>
          <Text>{label}</Text>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button
            size="small"
            variation="link"
            color={tokens.colors.brand.primary[80]}
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
}
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
    question: undefined,
    min: undefined,
    max: undefined,
    selections: [],
  };
  const [question, setQuestion] = React.useState(initialValues.question);
  const [min, setMin] = React.useState(initialValues.min);
  const [max, setMax] = React.useState(initialValues.max);
  const [selections, setSelections] = React.useState(initialValues.selections);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...questionsRecord };
    setQuestion(cleanValues.question);
    setMin(cleanValues.min);
    setMax(cleanValues.max);
    setSelections(cleanValues.selections ?? []);
    setCurrentSelectionsValue(undefined);
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
  const [currentSelectionsValue, setCurrentSelectionsValue] =
    React.useState(undefined);
  const selectionsRef = React.createRef();
  const validations = {
    question: [{ type: "Required" }],
    min: [],
    max: [{ type: "Required" }],
    selections: [],
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
          question,
          min,
          max,
          selections,
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
        label="Question"
        isRequired={true}
        isReadOnly={false}
        defaultValue={question}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              question: value,
              min,
              max,
              selections,
            };
            const result = onChange(modelFields);
            value = result?.question ?? value;
          }
          if (errors.question?.hasError) {
            runValidationTasks("question", value);
          }
          setQuestion(value);
        }}
        onBlur={() => runValidationTasks("question", question)}
        errorMessage={errors.question?.errorMessage}
        hasError={errors.question?.hasError}
        {...getOverrideProps(overrides, "question")}
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
              question,
              min: value,
              max,
              selections,
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
          if (onChange) {
            const modelFields = {
              question,
              min,
              max: value,
              selections,
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
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              question,
              min,
              max,
              selections: values,
            };
            const result = onChange(modelFields);
            values = result?.selections ?? values;
          }
          setSelections(values);
          setCurrentSelectionsValue(undefined);
        }}
        currentFieldValue={currentSelectionsValue}
        label={"Selections"}
        items={selections}
        hasError={errors.selections?.hasError}
        setFieldValue={setCurrentSelectionsValue}
        inputFieldRef={selectionsRef}
        defaultFieldValue={undefined}
      >
        <TextField
          label="Selections"
          isRequired={false}
          isReadOnly={false}
          value={currentSelectionsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.selections?.hasError) {
              runValidationTasks("selections", value);
            }
            setCurrentSelectionsValue(value);
          }}
          onBlur={() =>
            runValidationTasks("selections", currentSelectionsValue)
          }
          errorMessage={errors.selections?.errorMessage}
          hasError={errors.selections?.hasError}
          ref={selectionsRef}
          {...getOverrideProps(overrides, "selections")}
        ></TextField>
      </ArrayField>
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
