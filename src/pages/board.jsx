import React from 'react'
import PropTypes from 'prop-types'
import Card from '../components/Card'
import Content, { HTMLContent } from '../components/Content'
import styled from 'styled-components'

const BoardPic = styled.img`
  max-height: 20rem;
  max-width: 100%;
  width: auto;
  height: auto;
`

export default class BoardsPage extends React.Component {
  render() {
    const { data } = this.props
    let boardArr = []
    data.Board.edges.forEach((edge, i) =>
      boardArr.push(
      <div className="tile is-parent">
        <Card className="tile is-child" style={{width: "100%"}}>
          <div className="columns">
            <div className="column">
              <h3 className="title">
                {data.Board.edges[i].node.frontmatter.title}
              </h3>
              <HTMLContent content={data.Board.edges[i].node.html} />
            </div>
            <div className="column">
              <BoardPic
                src={data.Board.edges[i].node.frontmatter.picture}
              />
            </div>
          </div>
        </Card>
        </div>
      )
    )
    return (
      <div
        className="container"
        style={{ paddingTop: '2rem', paddingBottom: '10rem' }}
      >
        <div className="tile is-ancestor is-vertical">
          {boardArr}
        </div>
      </div>
    )
  }
}

BoardsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query BoardsQuery {
    Board: allMarkdownRemark(
      limit: 10
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
  }
`
