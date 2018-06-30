import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Pets from "@material-ui/icons/Pets";

function Footer() {
  return (
    <footer className="footer">
      <Typography variant="title" color="inherit">
        <Pets />
      </Typography>
    </footer>
  );
}

export default Footer;
