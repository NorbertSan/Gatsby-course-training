import React from 'react';
import Layout from '../components/Layout/Layout';
import PostsList from '../components/PostsList/PostsList';

const Blog: React.FC = () => {
  return (
    <Layout>
      <PostsList />
    </Layout>
  );
};

export default Blog;
