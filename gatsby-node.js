const path = require('path');
const fs = require('fs');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve('src/templates/blog-post.js');
  const projectPostTemplate = path.resolve('src/templates/project-post.js');

  const result = await graphql(`
    {
      blogPosts: allMarkdownRemark(filter: { frontmatter: { key: { eq: "blog" } } }) {
        edges {
          node {
            id
            frontmatter {
              slug
              title
              key
              date
            }
          }
        }
      }
      projectPosts: allMarkdownRemark(filter: { frontmatter: { key: { eq: "project" } } }) {
        edges {
          node {
            id
            frontmatter {
              slug
              title
              date
              from
              until
              logo {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
              logoAlt
              workRole
            }
          }
        }
      }
    }
  `);

  if (result.error) {
    reporter.panicOnBuild(`error while running GraphQL query: ${result.error}`);
    return;
  }

  const blogPosts = result.data.blogPosts.edges;

  blogPosts.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: blogPostTemplate,
      context: {
        id: node.id,
      },
    });
  });

  const projectPosts = result.data.projectPosts.edges;

  projectPosts.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: projectPostTemplate,
      context: {
        id: node.id,
      },
    });
  });
};
