import React from 'react'
import PropTypes from 'prop-types'

import Content, { HTMLContent } from '../components/Content'
import HeaderContainer from './../components/Header'
import Logo from './../components/Logo'
import Card from './../components/Card'
import EventList from './../components/EventList'
import SponsorList from '../components/SponsorList'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    console.log(data.Sponsors)
    return (
      <div>
        <HeaderContainer
          style={{
            backgroundImage:
              'url(' + data.Header.edges[0].node.frontmatter.header + ')',
          }}
        >
          <Logo />
        </HeaderContainer>
        <div className="container">
          <div className="tile is-ancestor is-vertical">
            <div className="tile is-parent">
              <Card className="tile is-child">
                <h1 className="title">
                  {data.About.edges[0].node.frontmatter.title}
                </h1>
                <HTMLContent content={data.About.edges[0].node.html} />
              </Card>
            </div>

            <div className="tile">
              <div className="tile is-parent">
                <Card className="tile is-child">
                  <h3>Tulevia tapahtumia</h3>
                  <EventList eventsArr={data.Events} />
                </Card>
              </div>
              <div className="tile is-parent">
                <Card className="tile is-child">
                  <h3 className="title">
                    {data.Contact.edges[0].node.frontmatter.title}
                  </h3>
                  <HTMLContent content={data.Contact.edges[0].node.html} />
                </Card>
              </div>
            </div>
            <SponsorList sponsorsArr={data.Sponsors} />
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
      limit: 5
      filter: {
        frontmatter: { templateKey: { eq: "EventPost" } }
        fields: { new: { eq: true } }
      }
      sort: { fields: [frontmatter___date], order: ASC }
    ) {
      edges {
        node {
          fields {
            slug
            new
            fDate
          }
          frontmatter {
            title
            location
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
    Header: allMarkdownRemark(
      limit: 1
      filter: { frontmatter: { identifier: { eq: "config" } } }
    ) {
      edges {
        node {
          html
          frontmatter {
            header
          }
        }
      }
    }
    Sponsors: allMarkdownRemark(
      limit: 1
      filter: { frontmatter: { identifier: { eq: "sponsors" } } }
    ) {
      edges {
        node {
          frontmatter {
            sponsorlogos {
              logo
              url
            }
          }
        }
      }
    }
  }
`
