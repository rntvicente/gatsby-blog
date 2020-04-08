import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import PostItem from '../components/PostItem';  

const BlogList = ({ data }) => {
  const wrapperPosts = () => {
    const posts = data.allMarkdownRemark.edges || [];

    const post = posts && posts.map(post => {
      const { frontmatter, timeToRead, fields } = post.node;

      const {
        background,
        category,
        date,
        description,
        title
      } = frontmatter;

      return (
        <PostItem
          slug={fields.slug}
          background={background}
          category={category}
          date={date}
          timeToRead={timeToRead}
          title={title}
          description={description}
        />
      );
    });

    return post;
  };

  return (
    <Layout>
      <SEO title='Home' />
      {wrapperPosts()}
    </Layout>
  );
};

export const query = () => graphql`
  query Posts($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: {fields: frontmatter___date, order: DESC}
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          frontmatter {
            background
            category
            date(locale: "pt-br", formatString: "DD[,] MMMM [de] YYYY")
            description
            title
          }
          timeToRead
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default BlogList;
