import React from "react";
import EventListItem from "./EventListItem";

export default function EventList({
  events,
  selectEvent,
  deleteEvent,
  authenticated,
}) {
  return (
    <>
      {events.map((e) => (
        <EventListItem
          authenticated={authenticated}
          event={e}
          key={e.id}
          selectEvent={selectEvent}
          deleteEvent={deleteEvent}
        />
      ))}
    </>
  );
}
