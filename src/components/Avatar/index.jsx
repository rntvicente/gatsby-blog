import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from "prop-types";

const Avatar = ({ width, alt }) => {
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
    <Img
      style={{ width }}
      fluid={data.file.childImageSharp.fluid}
      alt={alt}
    />
  );
};

Avatar.propTypes = {
  width: PropTypes.number.isRequired,
  alt: PropTypes.string.isRequired
};

export default Avatar;
