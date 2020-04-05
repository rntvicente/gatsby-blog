import React from 'react';

import Profile from '../Profile';
import SocialLinks from '../SocialLinks';

import * as Styled from './styled';

const Sidebar = () => (
  <Styled.SidebarWrapper>
    <Profile />
    <SocialLinks />
  </Styled.SidebarWrapper>
);

export default Sidebar;
