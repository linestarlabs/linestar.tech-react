/**
=========================================================
* Soft UI Dashboard PRO React - v4.0.0
=========================================================

* Product Page: https://material-ui.com/store/items/soft-ui-pro-dashboard/
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Soft UI Dashboard PRO React base styles
import borders from "assets/theme/base/borders";
import colors from "assets/theme/base/colors";

const { dark } = colors;
const { borderWidth, borderColor } = borders;

const stepConnector = {
  styleOverrides: {
    root: {
      color: borderColor,
      transition: "all 200ms linear",

      "&.Mui-active": {
        color: dark.main,
      },

      "&.Mui-completed": {
        color: dark.main,
      },
    },

    alternativeLabel: {
      top: "14%",
      left: "-50%",
      right: "50%",
    },

    line: {
      borderWidth: `${borderWidth[2]} !important`,
      borderColor: "currentColor",
    },
  },
};

export default stepConnector;
