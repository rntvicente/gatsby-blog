import React from "react";
import PropTypes from "prop-types";

import Sidebar from '../Sidebar';
import GlobalStyles from '../../styles/global';
import Menubar from '../Menubar';

import * as Styled from './styled';

const Layout = ({ children }) => (
  <Styled.LayoutWrapper>
    <GlobalStyles />
    <Sidebar />
    <Styled.LayoutMain>{children}</Styled.LayoutMain>
    <Menubar />
  </Styled.LayoutWrapper>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
