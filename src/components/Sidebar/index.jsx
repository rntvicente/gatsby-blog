import React from 'react';

import Profile from '../Profile';
import SocialLinks from '../SocialLinks';
import MenuLinks from '../MenuLinks';

import * as Styled from './styled';

const Sidebar = () => (
  <Styled.SidebarWrapper>
    <Profile />
    <SocialLinks />
    <MenuLinks />
  </Styled.SidebarWrapper>
);

export default Sidebar;
