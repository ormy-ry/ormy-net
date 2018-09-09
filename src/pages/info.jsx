import React from 'react'
import PropTypes from 'prop-types'

import Card from '../components/Card'
import Content, { HTMLContent } from '../components/Content'

export default class InfoPage extends React.Component {
  render() {
    /*
    const { data } = this.props
    console.log(data)*/
    return (
      <div className="container">
        <Card />
        <Card />
      </div>
    )
  }
}

InfoPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}
/*
export const pageQuery = graphql`
  query InfoQuery {
    Membership: allMarkdownRemark(
      limit: 1
      filter: { frontmatter: { identifier: { eq: "membership" } } }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
          }
        }
      }
    }
    Board: allMarkdownRemark(
      limit: 1
      filter: { frontmatter: { identifier: { eq: "board" } } }
      sort: { fields: [frontmatter___year], order: DESC }
    ) {
      edges {
        node {
          html
          frontmatter {
            picture
            year
          }
        }
      }
    }
  }
`
*/
