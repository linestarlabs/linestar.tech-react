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
import colors from "assets/theme/base/colors";
import boxShadows from "assets/theme/base/boxShadows";
import borders from "assets/theme/base/borders";

const { white } = colors;
const { xxl } = boxShadows;
const { borderRadius } = borders;

const tableContainer = {
  styleOverrides: {
    root: {
      backgroundColor: white.main,
      boxShadow: xxl,
      borderRadius: borderRadius.xl,
    },
  },
};

export default tableContainer;
