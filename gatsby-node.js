const path = require('path');

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md');
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const markdowns = result.data.allMarkdownRemark.edges;
  const postTemplate = path.resolve('src/templates/Post.tsx');

  markdowns.forEach(markdown => {
    const slug = markdown.node.fields.slug;
    console.log(slug);
    createPage({
      path: `/blog/${slug}`,
      component: postTemplate,
      context: {
        slug,
      },
    });
  });
};
