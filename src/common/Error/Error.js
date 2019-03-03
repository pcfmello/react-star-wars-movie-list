import React from "react";
import PropTypes from "prop-types";
import { Icon } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    color: "gray",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    fontSize: 150
  }
};

const Error = ({ iconName, message, classes }) => (
  <div className={classes.root}>
    <Icon className={classes.icon}>{iconName}</Icon>
    <h2>{message}</h2>
  </div>
);

Error.propTypes = {
  /** Icon name that will showed. Names list is in: https://material.io/tools/icons */
  iconName: PropTypes.string,
  /** Message that will showed */
  message: PropTypes.string.isRequired,
  /** @ignore */
  classes: PropTypes.object
};

export default withStyles(styles)(Error);
