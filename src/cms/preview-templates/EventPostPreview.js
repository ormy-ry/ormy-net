import React from 'react'
import PropTypes from 'prop-types'
import { EventPostTemplate } from '../../templates/EventPost'

const EventPostPreview = ({ entry, widgetFor }) => (
  <EventPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    date={entry.getIn(['data', 'date'])}
    location={entry.getIn(['data', 'location'])}
    title={entry.getIn(['data', 'title'])}
  />
)

EventPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default EventPostPreview
