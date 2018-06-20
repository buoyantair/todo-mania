import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

export default function Login() {
  return (
    <div>
      <Typography variant="title" align="center">
        <p>Login to your account</p>
        <form noValidate autoComplete="off">
          <TextField
            id="username"
            label="User Name"
            margin="normal"
          />
          <TextField
            id="password"
            label="Password"
            margin="normal"
            type="password"
          />
        </form>
      </Typography>
    </div>
  )
}