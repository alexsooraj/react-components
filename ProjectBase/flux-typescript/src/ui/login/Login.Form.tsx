import componentTypes from "@data-driven-forms/react-form-renderer/dist/cjs/component-types";
import TextField from "@data-driven-forms/mui-component-mapper/dist/cjs/text-field";
import Checkbox from "@data-driven-forms/mui-component-mapper/dist/cjs/checkbox";
import validatorTypes from "@data-driven-forms/react-form-renderer/dist/cjs/validator-types";
import useFormApi from "@data-driven-forms/react-form-renderer/dist/cjs/use-form-api";
import React from "react";
import { Button } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "98%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const componentMapper = {
  [componentTypes.TEXT_FIELD]: {
    component: TextField,
    variant: "outlined",
    margin: "normal",
  },
  [componentTypes.CHECKBOX]: {
    component: Checkbox,
    color: "primary",
  },
};

const schema = {
  fields: [
    {
      component: componentTypes.TEXT_FIELD,
      name: "user_name",
      label: "Username",
      isRequired: true,
      validate: [
        {
          type: validatorTypes.REQUIRED,
          message: "Username should not be empty",
        },
      ],
    },
    {
      component: componentTypes.TEXT_FIELD,
      type: "password",
      name: "password",
      label: "Password",
      isRequired: true,
      validate: [
        {
          type: validatorTypes.REQUIRED,
          message: "Password should not be empty123",
        },
      ],
    },
    {
      component: componentTypes.CHECKBOX,
      name: "remember",
      label: "Remember me",
    },
  ],
};

const FormTemplate = ({ schema, formFields }: any) => {
  const classes = useStyles();
  const { handleSubmit, getState } = useFormApi();
  const { submitting, valid } = getState();
  return (
    <form onSubmit={handleSubmit}>
      {formFields}
      <Button
        type="submit"
        disabled={submitting || !valid}
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Sign In
      </Button>
    </form>
  );
};

export { FormTemplate, useStyles, componentMapper, schema };
