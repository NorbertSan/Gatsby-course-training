import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout/Layout';

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
    }
  }
`;

const Post: React.FC = (props: any) => {
  return (
    <Layout>
      <h2>{props.data.markdownRemark.frontmatter.title}</h2>
      <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      />
    </Layout>
  );
};

export default Post;
