import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import Card from '../components/Card'
import Content, { HTMLContent } from '../components/Content'
import styled from 'styled-components'

const BoardPic = styled.img`
  max-height: 20rem;
  max-width: 100%;
  width: auto;
  height: auto;
`

export default class InfoPage extends React.Component {
  render() {
    const { data } = this.props
    return (
      <div
        className="container"
        style={{ paddingTop: '2rem', paddingBottom: '10rem' }}
      >
        <div className="tile is-ancestor is-vertical">
          <div className="tile is-parent is-vertical">
            <Card className="tile is-child">
              <h3 className="title">
                {data.Membership.edges[0].node.frontmatter.title}
              </h3>
              <HTMLContent content={data.Membership.edges[0].node.html} />
            </Card>
            <Card className="tile is-child">
              <div className="columns">
                <div className="column">
                  <h3 className="title">
                    {data.Board.edges[0].node.frontmatter.title}
                  </h3>
                  <HTMLContent content={data.Board.edges[0].node.html} />
                </div>
                <div className="column">
                  <BoardPic
                    src={data.Board.edges[0].node.frontmatter.picture}
                  />
                </div>
              </div>
              <div className="level">
                <div className="level-right is-pulled-right"><Link className="has-text-weight-bold" to="/board">Edellisvuosien hallitukset</Link></div>
              </div>
            </Card>
          </div>
          <div className="tile">
            <div className="tile is-parent">
              <Card className="tile is-child">
                <h3 className="title">
                  {data.Contact.edges[0].node.frontmatter.title}
                </h3>
                <HTMLContent content={data.Contact.edges[0].node.html} />
              </Card>
            </div>

            <div className="tile is-parent">
              <Card className="tile is-child">
                <h3 className="title">
                  {data.Documents.edges[0].node.frontmatter.title}
                </h3>
                <HTMLContent content={data.Documents.edges[0].node.html} />
              </Card>
            </div>
          </div>
        </div>
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
            title
            picture
            year
          }
        }
      }
    }
    Contact: allMarkdownRemark(
      limit: 1
      filter: { frontmatter: { identifier: { eq: "contact" } } }
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
    Documents: allMarkdownRemark(
      limit: 1
      filter: { frontmatter: { identifier: { eq: "documents" } } }
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
  }
`
