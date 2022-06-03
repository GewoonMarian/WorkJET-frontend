import React from "react";
import { Nav } from "react-bootstrap";

export default function LoggedOut() {
  return (
    <Nav>
      <Nav.Link href="/login">Login</Nav.Link>
    </Nav>
  );
}
