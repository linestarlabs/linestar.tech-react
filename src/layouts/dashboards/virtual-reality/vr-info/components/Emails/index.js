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

// @mui material components
import Card from "@mui/material/Card";
import Tooltip from "@mui/material/Tooltip";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

function Emails() {
  return (
    <Card>
      <SoftBox display="flex" justifyContent="space-between" p={3} lineHeight={1}>
        <SoftTypography variant="body2" color="text">
          Emails (21)
        </SoftTypography>
        <Tooltip title="Check your emails" placement="top">
          <SoftBox component="a" href="#">
            <SoftTypography variant="body2">Check</SoftTypography>
          </SoftBox>
        </Tooltip>
      </SoftBox>
    </Card>
  );
}

export default Emails;
