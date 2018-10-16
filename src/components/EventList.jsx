import React from "react";
import EventListItem from "./EventListItem";

const EventList = props => {
  let eventsList = [];
  if (props.eventsArr) {
    props.eventsArr.edges.forEach((edge, i) =>
      eventsList.push(
        <EventListItem
          key={i}
          title={edge.node.frontmatter.title}
          date={edge.node.fields.fDate}
          location={edge.node.frontmatter.location}
          slug={edge.node.fields.slug}
        />
      )
    );
  }
  if (eventsList.length === 0) {
    eventsList.push(
      <tr>
        <td colSpan="3">
          Ei tulevia tapahtumia listattuna. Örmyn hallitus suunnittelee ja
          julkaisee säännöllisesti uutisia tapahtumia näillä sivuilla sekä
          Facebook -ryhmässä. Katso menneet tapahtumat{" "}
          <a href="/event">tapahtumasivulta</a>
        </td>
      </tr>
    );
  }
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
  );
};

export default EventList;
