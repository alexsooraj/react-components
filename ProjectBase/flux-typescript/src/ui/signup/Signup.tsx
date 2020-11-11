import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import FormRenderer from "@data-driven-forms/react-form-renderer/dist/cjs/form-renderer";
import componentTypes from "@data-driven-forms/react-form-renderer/dist/cjs/component-types";
import TextField from "@data-driven-forms/mui-component-mapper/dist/cjs/text-field";
import Checkbox from "@data-driven-forms/mui-component-mapper/dist/cjs/checkbox";
import select from "@data-driven-forms/mui-component-mapper/dist/cjs/select";
import useFormApi from "@data-driven-forms/react-form-renderer/dist/cjs/use-form-api";
import { Button } from "@material-ui/core";
import validatorTypes from "@data-driven-forms/react-form-renderer/dist/cjs/validator-types";
import DatePicker from "@data-driven-forms/mui-component-mapper/dist/cjs/date-picker";
import LoginActions from "./../../flux/actions/LoginActions";

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
    width: "98%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const validatorMapper = {
  same_password: () => (value: any, allValues: any) =>
    value !== allValues.password ? "Password do not match" : undefined,
};

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
  [componentTypes.SELECT]: {
    component: select,
    color: "primary",
  },
  [componentTypes.DATE_PICKER]: {
    component: DatePicker,
  },
};

const schema = {
  fields: [
    {
      component: componentTypes.TEXT_FIELD,
      name: "firstname",
      label: "First Name",
      isRequired: true,
      validate: [
        {
          type: validatorTypes.REQUIRED,
          message: "Please enter the first name",
        },
      ],
    },
    {
      component: componentTypes.TEXT_FIELD,
      name: "lastname",
      label: "Last Name",
      isRequired: true,
      validate: [
        {
          type: validatorTypes.REQUIRED,
          message: "Please enter the last name",
        },
      ],
    },
    {
      component: componentTypes.SELECT,
      label: "Select",
      name: "location",
      simpleValue: true,
      options: [
        {
          label: "Banglore",
          value: "Banglore",
        },
        {
          label: "Trivandrum",
          value: "Trivandrum",
        },
        {
          label: "Ernakulam",
          value: "Ernakulam",
        },
      ],
      isRequired: true,
      validate: [
        {
          type: validatorTypes.REQUIRED,
          message: "Location should not be empty",
        },
      ],
    },
    {
      component: componentTypes.DATE_PICKER,
      label: "01-12-2000",
      name: "DOB",
    },
    {
      component: componentTypes.TEXT_FIELD,
      name: "email",
      label: "Email",
      isRequired: true,
      validate: [
        { type: validatorTypes.REQUIRED },
        {
          type: validatorTypes.PATTERN,
          pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
          message: "Not a valid email",
        },
      ],
    },
    {
      component: componentTypes.TEXT_FIELD,
      type: "username",
      name: "username",
      label: "Username",
      helperText: "This will be the username while logging",
      isRequired: true,
      validate: [
        { type: validatorTypes.REQUIRED },
        {
          type: validatorTypes.PATTERN,
          pattern: "[~!@#$%^&*()?+]$",
          message: "must contain a special character",
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
          message: "Password should not be empty",
        },
      ],
    },
    {
      component: componentTypes.TEXT_FIELD,
      name: "confirmpassword",
      label: "Confirm Password",
      type: "password",
      isRequired: true,
      condition: {
        when: "password",
        isNotEmpty: true,
      },
      //validate: [{type: 'same_password'}]
      validate: [
        (value: any, allValues: any) =>
          value !== allValues.password ? "Wrong password" : undefined,
      ],
    },
    {
      component: componentTypes.CHECKBOX,
      name: "remember",
      label: "Remember me",
    },
  ],
};

const signup = (props: any) => (values: any, api: any) => {
  // console.log(values)
  LoginActions.signup({
    firstname: values.firstname,
    lastname: values.lastname,
    location: values.location,
    DOB: values.DOB,
    email: values.email,
    username: values.username,
    password: values.password,
  });
};

export default function SignUp(props: any) {
  const classes = useStyles();

  const FormTemplate = ({ schema, formFields }: any) => {
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
          Sign Up
        </Button>
      </form>
    );
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        boxShadow={3}
        bgcolor="background.paper"
        m={2}
        p={1}
        style={{ width: "30rem", height: "58rem", marginTop: 50 }}
      >
        <div className={classes.paper}>
          <Avatar className={classes.avatar}></Avatar>
          <Typography component="h1" variant="h5">
            SignUp
          </Typography>
          <div className={classes.form}>
            <FormRenderer
              FormTemplate={FormTemplate}
              schema={schema}
              componentMapper={componentMapper}
              onSubmit={signup(props)}
            />
            <Grid container>
              <Grid item>
                <Link href="/" variant="body2">
                  {"Already have an account? Want to Login?"}
                </Link>
              </Grid>
            </Grid>
          </div>
        </div>
      </Box>
    </Container>
  );
}
