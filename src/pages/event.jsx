import React from 'react'
import PropTypes from 'prop-types'
import Card from '../components/Card'
import EventList from '../components/EventList'
import Content, { HTMLContent } from '../components/Content'

import Link from 'gatsby-link'
import styled from 'styled-components'

const EventInfo = styled.div`
  display: block;
  padding: 1rem 0 0;
  font-size: 1.1rem;
  font-weight: bold;
  color: #b3b3b3;
`

export default class EventsPage extends React.Component {
  render() {
    const { data } = this.props
    let newArr = []
    data.New.edges.forEach((edge, i) =>
      newArr.push(
        <Card key={i} className="tile is-child">
          <h2 className="title">{edge.node.frontmatter.title}</h2>
          <HTMLContent content={edge.node.html} />
          <EventInfo>
            <span>{`${edge.node.fields.fDate}, ${
              edge.node.frontmatter.location
            }`}</span>
          </EventInfo>
        </Card>
      )
    )
    return (
      <div
        className="container"
        style={{ marginTop: '2rem', marginBottom: '10rem' }}
      >
        <div className="tile is-ancestor is-vertical">
          <div className="tile is-parent is-vertical">{newArr}</div>
          <div className="tile is-parent">
            <Card className="tile is-child">
              <h3 className="title">Menneet tapahtumat</h3>
              <EventList eventsArr={data.Old} />
            </Card>
          </div>
        </div>
      </div>
    )
  }
}

EventsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query EventsQuery {
    New: allMarkdownRemark(
      limit: 5
      filter: {
        frontmatter: { templateKey: { eq: "EventPost" } }
        fields: { new: { eq: true } }
      }
      sort: { fields: [frontmatter___date], order: ASC }
    ) {
      edges {
        node {
          html
          fields {
            slug
            fDate
          }
          frontmatter {
            title
            location
          }
        }
      }
    }
    Old: allMarkdownRemark(
      limit: 25
      filter: {
        frontmatter: { templateKey: { eq: "EventPost" } }
        fields: { new: { eq: false } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            fDate
          }
          frontmatter {
            title
            location
          }
        }
      }
    }
  }
`
