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

import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Custom styles for SoftSocialButton
import SoftSocialButtonRoot from "components/SoftSocialButton/SoftSocialButtonRoot";

const SoftSocialButton = forwardRef(
  ({ color, size, iconOnly, circular, children, ...rest }, ref) => (
    <SoftSocialButtonRoot
      {...rest}
      ref={ref}
      variant="contained"
      color="primary"
      size={size}
      ownerState={{ color, size, iconOnly, circular }}
    >
      {children}
    </SoftSocialButtonRoot>
  )
);

// Setting default values for the props of SoftSocialButton
SoftSocialButton.defaultProps = {
  size: "medium",
  color: "facebook",
  iconOnly: false,
  circular: false,
};

// Typechecking props for the SoftSocialButton
SoftSocialButton.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.oneOf([
    "facebook",
    "twitter",
    "instagram",
    "linkedin",
    "pinterest",
    "youtube",
    "github",
    "vimeo",
    "slack",
    "dribbble",
    "reddit",
    "tumblr",
  ]),
  iconOnly: PropTypes.bool,
  circular: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default SoftSocialButton;
