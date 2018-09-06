const moment = require('moment')
const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  return graphql(`
    {
      allMarkdownRemark(
        limit: 50
        filter: { frontmatter: { templateKey: { eq: "EventPost" } } }
      ) {
        edges {
          node {
            id
            fields {
              slug
              fDate
            }
            frontmatter {
              title
              date
              location
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const events = result.data.allMarkdownRemark.edges

    events.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.jsx`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators
  const now = moment()

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
    if (node.frontmatter.date) {
      createNodeField({
        node,
        name: `fDate`,
        value: moment(node.frontmatter.date, 'YYYY-MM-DD HH:mm').format(
          'DD.MM. YYYY, HH:mm'
        ),
      })
      if (moment(node.frontmatter.date) > now) {
        createNodeField({
          node,
          name: `new`,
          value: true,
        })
      } else {
        createNodeField({
          node,
          name: `new`,
          value: false,
        })
      }
    }
  }
}
