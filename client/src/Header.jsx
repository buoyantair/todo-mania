import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles'

const styles = {
  header: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  }
}

function Header({ classes }) {
  return (
    <div>
      <AppBar className={classes.header}>
        <Toolbar>
          <Typography variant="title"  color="inherit">
            Todo Mania
          </Typography>  
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(Header);