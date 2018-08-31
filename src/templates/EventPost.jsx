import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Content, { HTMLContent } from '../components/Content'

export const EventPostTemplate = ({
  content,
  contentComponent,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            {content}
          </div>
        </div>
      </div>
    </section>
  )
}

const EventPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <EventPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      helmet={<Helmet title={`${post.frontmatter.title} | Blog`} />}
      title={post.frontmatter.title}
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
      frontmatter {
        date
        title
        location
      }
    }
  }
`
