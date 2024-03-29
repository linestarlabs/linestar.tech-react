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
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// ProductPage page components
import ProductImages from "layouts/ecommerce/products/product-page/components/ProductImages";
import ProductInfo from "layouts/ecommerce/products/product-page/components/ProductInfo";

// Data
import dataTableData from "layouts/ecommerce/products/product-page/data/dataTableData";

import { useParams } from 'react-router-dom'

import useSWR from 'swr'

const fetcher = (path) => fetch(`https://linestar.tech${path}`).then(res => res.json())

function ProductPage() {

  const { sku } = useParams();

  const { data, error, loading } = useSWR(`/api/v1/products/${sku}`, fetcher)

  console.log({ data, error, loading })

  if (!data || loading) {
    return <></>
  }

  const { product } = data

  console.log('SKU', sku)

  return (
    <DashboardLayout>
      <DashboardNavbar />
      {product && (
      <SoftBox py={3}>
        <Card sx={{ overflow: "visible" }}>
          <SoftBox p={3}>
            <SoftBox mb={3}>
              <SoftTypography variant="h5" fontWeight="medium">
                Product Details
              </SoftTypography>
            </SoftBox>

            <Grid container spacing={3}>
              <Grid item xs={12} lg={6} xl={5}>
                <ProductImages product={product}/>
              </Grid>
              <Grid item xs={12} lg={5} sx={{ mx: "auto" }}>
                <ProductInfo product={product}/>
              </Grid>
            </Grid>

            <SoftBox mt={8} mb={2}>
              <SoftBox mb={1} ml={2}>
                <SoftTypography variant="h5" fontWeight="medium">
                  Other Products
                </SoftTypography>
              </SoftBox>
              <DataTable
                table={dataTableData}
                entriesPerPage={false}
                showTotalEntries={false}
                isSorted={false}
              />
            </SoftBox>
          </SoftBox>
        </Card>
      </SoftBox>
      )}
      <Footer />
    </DashboardLayout>
  );
}

export default ProductPage;
