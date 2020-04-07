import React, { Fragment } from 'react';
import { graphql } from 'gatsby';

const BlogPost = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;

  return (
    <Fragment>
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </Fragment>
  );
};

export const query = () => graphql`
query Post($slug: String!) {
  markdownRemark(fields: {slug: {eq: $slug }}) {
    frontmatter {
      title
    }
    html
  }
}`;

export default BlogPost;
