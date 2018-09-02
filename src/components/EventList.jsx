import React from 'react'
import EventListItem from './EventListItem'

const EventList = props => {
  console.log(props)
  let eventsList = []
  props.eventsArr.edges.forEach(edge =>
    eventsList.push(
      <EventListItem
        title={edge.node.frontmatter.title}
        date={edge.node.frontmatter.date}
        location={edge.node.frontmatter.location}
      />
    )
  )
  return (
    <table className="table is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th>TAPAHTUMA</th>
          <th>AIKA</th>
          <th>PAIKKA</th>
        </tr>
      </thead>
      <tbody>{eventsList}</tbody>
    </table>
  )
}

export default EventList
