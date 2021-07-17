import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import * as styles from './PostsList.module.scss';

interface IPost {
  node: {
    frontmatter: {
      title: string;
    };
    html: string;
    fields: {
      slug: string;
    };
  };
}

const PostsList: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
            }
            html
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const posts: IPost[] = data.allMarkdownRemark.edges;

  return (
    <>
      <h3>My posts</h3>

      <section className={styles.posts_container}>
        {posts.map((post: IPost, index: number) => (
          <article key={index} className={styles.post_item}>
            <h4>{post.node.frontmatter.title}</h4>
            <div dangerouslySetInnerHTML={{ __html: post.node.html }} />
            <Link to={`/blog/${post.node.fields.slug}`}>Read more...</Link>
          </article>
        ))}
      </section>
    </>
  );
};

export default PostsList;
