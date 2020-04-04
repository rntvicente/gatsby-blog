import React, { Fragment } from "react";
import PropTypes from "prop-types";

import Profile from './Profile';

const Layout = ({ children }) => (
  <Fragment>
    <aside>
      <Profile />
    </aside>
    <main>{children}</main>
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
