import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  Divider,
  Grid,
  InputLabel,
  TextField,
  Typography,
} from "@material-ui/core";
import MenuAppBar from "../navbar/navbar";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(10),
    marginLeft: theme.spacing(10),
  },
  inputLabel: {
    margin: 20,
    color: "black",
    marginRight: 40,
  },
  textInput: {
    width: 500,
    alignItems: "center",
  },
  papper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginTop: 30,
    marginBottom: 30,
  },
}));

export default function View() {
  const classes = useStyles();
  return (
    <div>
      <MenuAppBar />
      <div className={classes.container}>
        <Typography component="h2" variant="h5">
          Employee Details
        </Typography>
        <Divider />
        <div className={classes.papper}>
          <Grid container>
            <InputLabel className={classes.inputLabel}>First Name</InputLabel>

            <TextField
              disabled
              style={{ marginLeft: 70, marginBottom: 20, width: 500 }}
              id="standard-required"
              defaultValue="abc"
              variant="standard"
            />
          </Grid>
          <Grid container>
            <InputLabel className={classes.inputLabel}>Last Name</InputLabel>
            <TextField
              disabled
              style={{ marginLeft: 70, marginBottom: 20, width: 500 }}
              id="standard-required"
              defaultValue="abc"
            />
          </Grid>
          <Grid container>
            <InputLabel className={classes.inputLabel}>
              Mobile Number
            </InputLabel>
            <TextField
              disabled
              style={{ marginLeft: 40, marginBottom: 20, width: 500 }}
              id="standard-required"
              defaultValue="123"
            />
          </Grid>
          <Grid container>
            <InputLabel className={classes.inputLabel}>Location</InputLabel>
            <TextField
              disabled
              style={{ marginLeft: 90, marginBottom: 20, width: 500 }}
              id="standard-required"
              defaultValue="tvm"
            />
          </Grid>
        </div>
        <Typography paragraph component="h2" variant="h5">
          Professional Details
        </Typography>
        <Divider />
        <div className={classes.papper}>
          <Grid container>
            <InputLabel className={classes.inputLabel}>
              Qualification
            </InputLabel>
            <TextField
              disabled
              style={{ marginLeft: 70, marginBottom: 20, width: 500 }}
              id="standard-required"
              defaultValue="Btech"
            />
          </Grid>
          <Grid container>
            <InputLabel className={classes.inputLabel}>
              Years of experience
            </InputLabel>
            <TextField
              disabled
              style={{ marginLeft: 20, marginBottom: 20, width: 500 }}
              id="standard-required"
              defaultValue="2"
            />
          </Grid>
          <Grid container>
            <InputLabel className={classes.inputLabel}>
              Area of interest
            </InputLabel>
            <TextField
              disabled
              style={{ marginLeft: 50, marginBottom: 20, width: 500 }}
              id="standard-required"
              defaultValue="abc"
            />
          </Grid>
        </div>
      </div>
    </div>
  );
}
