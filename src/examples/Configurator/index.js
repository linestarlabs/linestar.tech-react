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

import { useState, useEffect } from "react";

// react-github-btn
import GitHubButton from "react-github-btn";

// @mui material components
import Divider from "@mui/material/Divider";
import Switch from "@mui/material/Switch";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";

// @mui icons
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

import useAuth from 'hooks/useAuth'

// Custom styles for the Configurator
import ConfiguratorRoot from "examples/Configurator/ConfiguratorRoot";

// Soft UI Dashboard PRO React context
import {
  useSoftUIController,
  setOpenConfigurator,
  setTransparentSidenav,
  setMiniSidenav,
  setFixedNavbar,
  setSidenavColor,
} from "context";

function Configurator() {
  const [controller, dispatch] = useSoftUIController();
  const { openConfigurator, transparentSidenav, miniSidenav, fixedNavbar, sidenavColor } =
    controller;
  const [disabled, setDisabled] = useState(false);
  const sidenavColors = ["primary", "dark", "info", "success", "warning", "error"];

  const { logout, user, restore } = useAuth()

  console.log('USE AUTH', user)

  // Use the useEffect hook to change the button state for the sidenav type based on window size.
  useEffect(() => {
    // A function that sets the disabled state of the buttons for the sidenav type.
    function handleDisabled() {
      return window.innerWidth > 1200 ? setDisabled(false) : setDisabled(true);
    }

    // The event listener that's calling the handleDisabled function when resizing the window.
    window.addEventListener("resize", handleDisabled);

    // Call the handleDisabled function to set the state with the initial value.
    handleDisabled();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleDisabled);
  }, []);


  useEffect(() => {

    if (relayone) {
      restore(relayone)
    }
    

  }, [])


  const handleCloseConfigurator = () => setOpenConfigurator(dispatch, false);
  const handleTransparentSidenav = () => setTransparentSidenav(dispatch, true);
  const handleWhiteSidenav = () => setTransparentSidenav(dispatch, false);
  const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);
  const handleFixedNavbar = () => setFixedNavbar(dispatch, !fixedNavbar);

  // sidenav type buttons styles
  const sidenavTypeButtonsStyles = ({
    functions: { pxToRem },
    boxShadows: { buttonBoxShadow },
  }) => ({
    height: pxToRem(42),
    boxShadow: buttonBoxShadow.main,

    "&:hover, &:focus": {
      opacity: 1,
    },
  });

  function signOut(event) {

    event.preventDefault()
    event.stopPropagation()

    logout()

    setOpenConfigurator(dispatch, false)

  }

  return (
    <ConfiguratorRoot variant="permanent" ownerState={{ openConfigurator }}>
      <SoftBox
        display="flex"
        justifyContent="space-between"
        alignItems="baseline"
        pt={3}
        pb={0.8}
        px={3}
      >
        <SoftBox>
          <SoftTypography variant="h5">My Linestar Grid Account</SoftTypography>
          <SoftTypography variant="body2" color="text">
            {user && user.paymail}
          </SoftTypography>
        </SoftBox>

        <Icon
          sx={({ typography: { size, fontWeightBold }, palette: { dark } }) => ({
            fontSize: `${size.md} !important`,
            fontWeight: `${fontWeightBold} !important`,
            stroke: dark.main,
            strokeWidth: "2px",
            cursor: "pointer",
            mt: 2,
          })}
          onClick={handleCloseConfigurator}
        >
          close
        </Icon>
      </SoftBox>

      <Divider />

      <SoftBox pt={1.25} pb={3} px={3}>

        <Divider />

        <SoftBox mt={3} mb={2}>
          <SoftBox mb={2}>
            <SoftButton
              component={Link}
              href="https://material-ui.com/store/items/soft-ui-pro-dashboard/"
              target="_blank"
              rel="noreferrer"
              color="info"
              variant="gradient"
              fullWidth
            >
              buy now
            </SoftButton>
          </SoftBox>
          {user && (
          <SoftButton
          component={Link}
          color="dark"
          variant="outlined"
          fullWidth
          onClick={signOut}
        >
          Sign Out
        </SoftButton>
          )}

        </SoftBox>
      </SoftBox>
    </ConfiguratorRoot>
  );
}

export default Configurator;
