const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  // Ensures we are processing only markdown files
  if (node.internal.type === "MarkdownRemark") {
    // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`
    const slug = createFilePath({
      node,
      getNode,
      basePath: "pages",
    })

    // Creates new query'able field with name of 'slug'
    createNodeField({
      node,
      name: "slug",
      value: `/${slug.slice(12)}`,
    })
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
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
          next {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
          previous {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }          
        }
      }
    }`).then(result => {

    if (result.errors) {
      throw result.errors
    }

    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach(post => {
      createPage({
        path: post.node.fields.slug,
        component: path.resolve('./src/templates/blog-post.jsx'),
        context: {
          slug: post.node.fields.slug,
          previousPost: post.next,
          nextPost: post.previous,
        },
      });
    });

    const postsPerPage = 6;
    const numPages = Math.ceil(posts.length / postsPerPage);

    Array.from({ length: numPages }).forEach((_, index) => {
      currentPage = index + 1;

      createPage({
        path: (index === 0) ? `/` : `/page/${currentPage}`,
        component: path.resolve(`./src/templates/blog-list.jsx`),
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          numPages,
          currentPage
        }
      });
    });
  });
};