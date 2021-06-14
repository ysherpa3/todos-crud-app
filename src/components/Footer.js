/** Footer */

import { Typography } from "@material-ui/core";
import React from "react";

const Footer = () => {
  return (
    <Typography
      style={{
        width: "100%",
        minHeight: "2.5rem",
      }}
    >
      &copy; {new Date().getFullYear()}
    </Typography>
  );
};

export default Footer;
