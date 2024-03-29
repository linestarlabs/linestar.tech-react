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
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

import { Link } from 'react-router-dom'

function ActionCell(params) {

  const { product } = params

  console.log('PRODUCT', product)
  return (
    <SoftBox display="flex" alignItems="center">
      <Link to={`/products/${product.sku}`}>
        <SoftTypography variant="body1" color="secondary" sx={{ cursor: "pointer", lineHeight: 0 }}>
          <Tooltip title="Preview product" placement="top">
            <Icon>visibility</Icon>
          </Tooltip>
        </SoftTypography>
      </Link>
      <SoftBox mx={2}>
        <Link to={`/products/${product.sku}/edit`}>
          <SoftTypography variant="body1" color="secondary" sx={{ cursor: "pointer", lineHeight: 0 }}>
            <Tooltip title="Edit product" placement="top">
              <Icon>edit</Icon>
            </Tooltip>
          </SoftTypography>
        </Link>
      </SoftBox>
      <SoftTypography variant="body1" color="secondary" sx={{ cursor: "pointer", lineHeight: 0 }}>
        <Tooltip title="Delete product" placement="left">
          <Icon>delete</Icon>
        </Tooltip>
      </SoftTypography>
    </SoftBox>
  );
}

export default ActionCell;
