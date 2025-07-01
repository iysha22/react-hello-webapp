import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav style={{ background: "#222", padding: "10px" }}>
    <Link to="/" style={{ color: "white", marginRight: 15 }}>Home</Link>
    <Link to="/contacts" style={{ color: "white", marginRight: 15 }}>Contacts</Link>
    <Link to="/demo" style={{ color: "white" }}>Demo</Link>
  </nav>
);

export default Navbar;
