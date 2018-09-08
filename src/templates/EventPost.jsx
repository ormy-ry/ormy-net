import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Content, { HTMLContent } from '../components/Content'
import Card from './../components/Card'

const EventInfo = styled.div`
  display: block;
  padding: 1rem 0 0;
  font-size: 1.1rem;
  font-weight: bold;
  color: #b3b3b3;
`

export const EventPostTemplate = ({
  content,
  contentComponent,
  title,
  helmet,
  date,
  location,
}) => {
  const PostContent = contentComponent || Content

  return (
    <div className="container content">
      {helmet || ''}
      <Card>
        <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
          {title}
        </h1>
        <PostContent content={content} />
        <EventInfo>
          <span>{`${date}, ${location}`}</span>
        </EventInfo>
      </Card>
    </div>
  )
}

const EventPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <EventPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      helmet={<Helmet title={`ÖRMY | ${post.frontmatter.title}`} />}
      title={post.frontmatter.title}
      date={post.fields.fDate}
      location={post.frontmatter.location}
    />
  )
}

export default EventPost

EventPostTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
}

export const pageQuery = graphql`
  query EventPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        fDate
      }
      frontmatter {
        date
        title
        location
      }
    }
  }
`
