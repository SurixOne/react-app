import React from "react";
import { useState } from "react/cjs/react.development";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar";


function App() {
  const [formOpen, setFormOpen] = useState(false);
  return (
    <>
      <NavBar setFormOpen={setFormOpen}></NavBar>
      <Container className="main">
        <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen} />
      </Container>
    </>
  );
}

export default App;
