import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import EventForm from "../eventForm/EventForm";
import EventList from "./EventList";
import { sampleData } from "../../../app/api/sampleData.js";

export default function EventDashboard({
  formOpen,
  setFormOpen,
  selectEvent,
  selectedEvent,
  authenticated,
}) {
  const [events, setEvents] = useState(sampleData);

  function handleCreateEvent(event) {
    setEvents([...events, event]);
  }

  function handleEventUpdates(updatedEvent) {
    setEvents(events.map((e) => (e.id === updatedEvent.id ? updatedEvent : e)));
    selectEvent(null);
  }

  function handleDeleteEvent(id) {
    setEvents(events.filter((e) => e.id !== id));
  }

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList
          authenticated={authenticated}
          events={events}
          selectEvent={selectEvent}
          deleteEvent={handleDeleteEvent}
        />
      </Grid.Column>
      <Grid.Column width={6}>
        {formOpen && (
          <EventForm
            setFormOpen={setFormOpen}
            createEvent={handleCreateEvent}
            selectedEvent={selectedEvent}
            key={selectedEvent ? selectedEvent.id : null}
            updateEvent={handleEventUpdates}
          />
        )}
      </Grid.Column>
    </Grid>
  );
}
