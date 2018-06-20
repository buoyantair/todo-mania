import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import Header from "./Header.jsx";
import Login from "./Login.jsx";

import "./App.sass";

const styles = theme => ({
  root: theme.mixins.gutters({
    marginTop: theme.spacing.unit * 12
  }),
  content: {
    display: 'grid',
    gridTemplateColumns: '.3fr 1fr',
  },
  loginColumn: {
    gridColumn: 1,
  },
  dashboardColumn: {
    gridColumn: 2,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    minHeight: '500px',
    margin: theme.spacing.unit * 2
  }
});

function App({ classes }) {
  return (
    <div className={classes.root}>
      <Header />
      <Grid container className={classes.content}>
        <Grid item className={classes.loginColumn}>
          <Paper className={classes.paper}>
            <Login />
          </Paper>
        </Grid>
        <Grid item className={classes.dashboardColumn}>
          <Paper className={classes.paper}>
            <Typography>Helo</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(App);
