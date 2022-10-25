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

/* eslint-disable react/prop-types */
// Soft UI Dashboard PRO React components
import SoftBadge from "components/SoftBadge";

// ProductsList page components
import ProductCell from "layouts/ecommerce/products/products-list/components/ProductCell";
import ActionCell from "layouts/ecommerce/products/products-list/components/ActionCell";

// Images
import adidasHoodie from "assets/images/ecommerce/adidas-hoodie.jpeg";
import macBookPro from "assets/images/ecommerce/macbook-pro.jpeg";
import metroChair from "assets/images/ecommerce/metro-chair.jpeg";
import alchimiaChair from "assets/images/ecommerce/alchimia-chair.jpeg";
import fendiCoat from "assets/images/ecommerce/fendi-coat.jpeg";
import offWhiteJacket from "assets/images/ecommerce/off-white-jacket.jpeg";
import yohjiYamamoto from "assets/images/ecommerce/yohji-yamamoto.jpeg";
import mcqueenShirt from "assets/images/ecommerce/mcqueen-shirt.jpeg";
import yellowChair from "assets/images/ecommerce/yellow-chair.jpeg";
import heronTshirt from "assets/images/ecommerce/heron-tshirt.jpeg";
import livingChair from "assets/images/ecommerce/living-chair.jpeg";
import orangeSofa from "assets/images/ecommerce/orange-sofa.jpeg";
import burberry from "assets/images/ecommerce/burberry.jpeg";
import dgSkirt from "assets/images/ecommerce/d&g-skirt.jpeg";
import undercover from "assets/images/ecommerce/undercover.jpeg";

// Badges
const outOfStock = (
  <SoftBadge variant="contained" color="error" size="xs" badgeContent="out of stock" container />
);
const inStock = (
  <SoftBadge variant="contained" color="success" size="xs" badgeContent="in stock" container />
);

export function buildDataTableData(products) {

  console.log('BUILD', products)

  const dataTableData = {
    columns: [
      {
        Header: "product",
        accessor: "product",
        width: "40%",
        Cell: ({ value: [name, data] }) => (
          <ProductCell image={data.image} name={name} checked={data.checked} />
        ),
      },
      { Header: "category", accessor: "category" },
      { Header: "price", accessor: "price" },
      { Header: "sku", accessor: "sku" },
      { Header: "quantity", accessor: "quantity" },
      {
        Header: "status",
        accessor: "status",
        Cell: ({ value }) => (value === "IN STOCK" ? inStock : outOfStock),
      },
      { Header: "action", accessor: "action" },
    ],
  
    rows: products.map(product => {
      return {
        product: [product.name, { image: product.image_url, checked: true }],
        category: product.category,
        price: `$${product.price}`,
        sku: product.sku,
        quantity: product.quantity,
        status: product.status,
        action: <ActionCell product={product}/>,
      }
    })
  };

  return dataTableData
  
}
