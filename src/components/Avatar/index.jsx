import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from "prop-types";

import * as Styled from './styled';

const Avatar = ({ alt }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "avatar-batata.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 60, maxHeight: 60) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Styled.AvatarWrapper fluid={data.file.childImageSharp.fluid} alt={alt} />
  );
};

Avatar.propTypes = {
  alt: PropTypes.string.isRequired
};

export default Avatar;
