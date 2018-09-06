import React from 'react'
import EventListItem from './EventListItem'

const EventList = props => {
  let eventsList = []
  props.eventsArr.edges.forEach(edge =>
    eventsList.push(
      <EventListItem
        title={edge.node.frontmatter.title}
        date={edge.node.fields.fDate}
        location={edge.node.frontmatter.location}
        slug={edge.node.fields.slug}
      />
    )
  )
  return (
    <table className="table is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th className="is-uppercase">tapahtuma</th>
          <th className="is-uppercase">aika</th>
          <th className="is-uppercase">paikka</th>
        </tr>
      </thead>
      <tbody>{eventsList}</tbody>
    </table>
  )
}

export default EventList
