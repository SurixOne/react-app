import React from "react";
import { Route } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import EventDetailPage from "../../features/events/eventDetail/EventDetailPage";
import EventForm from "../../features/events/eventForm/EventForm";
import HomePage from "../../features/home/HomePage";
import NavBar from "../../features/nav/NavBar";

function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  function handleSelectEvent(event) {
    setSelectedEvent(event);
    setFormOpen(true);
  }

  function handleCreateFormOpen() {
    setSelectedEvent(null);
    setFormOpen(true);
  }

  //   <EventDashboard
  //   formOpen={formOpen}
  //   setFormOpen={setFormOpen}
  //   selectEvent={handleSelectEvent}
  //   selectedEvent={selectedEvent}
  // />
  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <NavBar setFormOpen={handleCreateFormOpen}></NavBar>
            <Container className="main">
              <Route exact path="/" component={HomePage} />
              <Route exact path="/events" component={EventDashboard} />
              <Route path="/events:id" component={EventDetailPage} />
              <Route path="/createEvent" component={EventForm} />
            </Container>
          </>
        )}
      />
    </>
  );
}

export default App;
