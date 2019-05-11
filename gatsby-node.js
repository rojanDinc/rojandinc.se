/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const projectComponent = path.resolve('src/templates/project-template.js');

  return graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              pagetype
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      console.log(node);
    });

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      switch (node.frontmatter.pagetype) {
        case 'project-post':
          createPage({
            path: node.fields.slug,
            component: projectComponent,
            context: {
              slug: node.fields.slug,
            },
          });
          break;

        default:
          break;
      }
    });
  });
};
