import React from "react";
import PropTypes from "prop-types";

import Profile from '../Profile';
import GlobalStyles from '../../styles/global';
import * as Styled from './styled';

const Layout = ({ children }) => (
  <Styled.LayoutWrapper>
    <GlobalStyles />
    <aside>
      <Profile />
    </aside>
    <Styled.LayoutMain>{children}</Styled.LayoutMain>
  </Styled.LayoutWrapper>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
