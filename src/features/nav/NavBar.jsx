import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Container, Menu } from "semantic-ui-react";
import SignedInMenu from "../home/signedInMenu/SignedInMenu";
import SignedOutMenu from "../home/signedOutMenu/SignedOutMenu";

export default function NavBar({ setFormOpen }) {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} exact to="/">
          <img src="/assets/logo.png" alt="logo" style={{ marginRight: 10 }} />
          Que sale hoy
        </Menu.Item>
        <Menu.Item as={NavLink} to="/events" name="Events" />
        <Menu.Item>
          <Button
            as={NavLink}
            to="/createEvent"
            positive
            inverted
            content="Create Event"
          />
        </Menu.Item>
        <SignedOutMenu />
        <SignedInMenu />
      </Container>
    </Menu>
  );
}
