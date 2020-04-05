import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Avatar from '../Avatar';
import * as Styled from './styled';

const Profile = () => {
  const {
    site: {
      siteMetadata: {
        title,
        description,
        position
      }
    }
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          description
          position
        }
      }
    }
  `);

  return (
    <Styled.ProfileWrapper>
      <Styled.ProfileLink>
        <Avatar alt='Avatar do Autor' />
        <Styled.ProfileAuthor>{title}</Styled.ProfileAuthor>
        <Styled.ProfilePosition>{position}</Styled.ProfilePosition>
      </Styled.ProfileLink>

      <Styled.ProfileDescription>{description}</Styled.ProfileDescription>
    </Styled.ProfileWrapper>
  )
};

export default Profile;
