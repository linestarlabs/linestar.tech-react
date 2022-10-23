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

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

function OrderSummary() {
  return (
    <>
      <SoftBox mb={2}>
        <SoftTypography variant="h6" fontWeight="medium">
          Order Summary
        </SoftTypography>
      </SoftBox>
      <SoftBox display="flex" justifyContent="space-between" mb={0.5}>
        <SoftTypography variant="button" fontWeight="regular" color="text">
          Product Price:
        </SoftTypography>
        <SoftBox ml={1}>
          <SoftTypography variant="body2" fontWeight="medium">
            $90
          </SoftTypography>
        </SoftBox>
      </SoftBox>
      <SoftBox display="flex" justifyContent="space-between" mb={0.5}>
        <SoftTypography variant="button" fontWeight="regular" color="text">
          Delivery:
        </SoftTypography>
        <SoftBox ml={1}>
          <SoftTypography variant="body2" fontWeight="medium">
            $14
          </SoftTypography>
        </SoftBox>
      </SoftBox>
      <SoftBox display="flex" justifyContent="space-between" mb={0.5}>
        <SoftTypography variant="button" fontWeight="regular" color="text">
          Taxes:
        </SoftTypography>
        <SoftBox ml={1}>
          <SoftTypography variant="body2" fontWeight="medium">
            $1.95
          </SoftTypography>
        </SoftBox>
      </SoftBox>
      <SoftBox display="flex" justifyContent="space-between" mt={3}>
        <SoftTypography variant="body1" fontWeight="light" color="text">
          Total:
        </SoftTypography>
        <SoftBox ml={1}>
          <SoftTypography variant="body1" fontWeight="medium">
            $1.95
          </SoftTypography>
        </SoftBox>
      </SoftBox>
    </>
  );
}

export default OrderSummary;
