import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import FormRenderer from "@data-driven-forms/react-form-renderer/dist/cjs/form-renderer";
import LoginActions from "../../flux/actions/LoginActions";
import { FormTemplate, componentMapper, schema, useStyles } from "./Login.Form";
import { Redirect } from "react-router-dom";

function authenticate() {
  return (values: any, api: any) => {
    // console.log(values);
    LoginActions.login({
      username: values.user_name,
      password: values.password,
    });
  };
}

export default function Login(props : any) {
  const classes = useStyles();
  if (props.sessionData.isLoggedIn) {
    return <Redirect to="/" />;
  }
  return (
    <Container component="main" maxWidth="xs">
      <Box
        boxShadow={3}
        bgcolor="background.paper"
        m={2}
        p={1}
        style={{ width: "30rem", height: "30rem", marginTop: 150 }}
      >
        <div className={classes.paper}>
          <Avatar className={classes.avatar}></Avatar>
          <Typography component="h1" variant="h5">
            Login{" "}
          </Typography>
          <div className={classes.form}>
            <FormRenderer
              FormTemplate={FormTemplate}
              schema={schema}
              componentMapper={componentMapper}
              onSubmit={authenticate()}
            />
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </div>
        </div>
      </Box>
    </Container>
  );
}
