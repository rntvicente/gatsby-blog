import React from 'react';

import Icons from './Icons';
import Links from './content';

import * as Styled from './styled';

const SocialLinks = () => {
  const wrapperLink = () => Links.map((link, index) => {
    const Icon = Icons[link.label];

    return (
      <Styled.SocialLinksItem key={index}>
        <Styled.SocialLinksLink
          href={link.url}
          title={link.label}
          target='_blank'
          rel='noopener noreferrer' >
          <Styled.IconWrapper>
            <Icon />
          </Styled.IconWrapper>
        </Styled.SocialLinksLink>
      </Styled.SocialLinksItem>
    );
  });

  return (
    <Styled.SocialLinksWrapper>
      <Styled.SocialLinksList>
        {wrapperLink()}
      </Styled.SocialLinksList>
    </Styled.SocialLinksWrapper >
  );
};

export default SocialLinks;
