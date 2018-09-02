import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import Content, { HTMLContent } from '../components/Content'
import HeaderContainer from './../components/Header'
import Logo from './../components/Logo'
import Card from './../components/Card'
import EventList from './../components/EventList'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    return (
      <div>
        <HeaderContainer>
          <Logo />
        </HeaderContainer>
        <div className="container">
          <Card>
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {data.About.edges[0].node.frontmatter.title}
            </h1>
            <HTMLContent content={data.About.edges[0].node.html} />
          </Card>
          <div className="columns">
            <div className="column">
              <Card>
                <EventList eventsArr={data.Events} />
              </Card>
            </div>
            <div className="column">
              <Card />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    About: allMarkdownRemark(
      limit: 1
      filter: { frontmatter: { identifier: { eq: "about" } } }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            identifier
          }
        }
      }
    }
    Events: allMarkdownRemark(
      limit: 10
      filter: { frontmatter: { templateKey: { eq: "EventPost" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
            location
          }
        }
      }
    }
  }
`
