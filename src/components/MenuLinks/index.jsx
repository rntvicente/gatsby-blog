import React from 'react';

import Links from './content';

import * as Styled from './styled';

const MenuLinks = () => {
  const wrapperLink = () => Links.map((link, index) => (
    <Styled.MenuLinksItem key={index}>
      <Styled.MenuLinksLink to={link.url} activeClassName='active'>
        {link.label}
      </Styled.MenuLinksLink>
    </Styled.MenuLinksItem>
  ));

  return (
    <Styled.MenuLinksWrapper>
      <Styled.MenuLinksList>
        {wrapperLink()}
      </Styled.MenuLinksList>
    </Styled.MenuLinksWrapper>
  );
};

export default MenuLinks;
