import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import PostItem from '../components/PostItem';
import Posts from '../repositories/post';

const IndexPage = () => {
  const wrapperPosts = () => (
    Posts.map((post) => (
      <PostItem
        tag={post.tag}
        title={post.title}
        date={post.date}
        description={post.description}
      />
    ))
  );

  const { tag, date, description, title } = Posts[0];

  return (
    <Layout>
      <SEO title='Home' />
      {wrapperPosts()}
    </Layout>
  );
};

export default IndexPage;
