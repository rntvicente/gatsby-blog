import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';

import * as Styled from '../components/Post/styled';

const BlogPost = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;

  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <Styled.PostHeader>
        <Styled.PostDate>{frontmatter.date} - {frontmatter.timeToread}</Styled.PostDate>
        <Styled.PostTitle>{frontmatter.title}</Styled.PostTitle>
        <Styled.PostDescription>{frontmatter.description}</Styled.PostDescription>
      </Styled.PostHeader>

      <Styled.MainContent>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </Styled.MainContent>
    </Layout>
  );
};

export const query = () => graphql`
query Post($slug: String!) {
  markdownRemark(fields: {slug: {eq: $slug }}) {
    frontmatter {
      title
      date(locale: "pt-br", formatString: "DD[,] MMMM [de] YYYY")
      description     
    }
    timeToRead
    html
  }
}`;

export default BlogPost;
