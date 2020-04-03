import React from 'react';
import {Link,NavLink} from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expend-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">Evidencija korisnika </Link>
      <ul className="navbar-nav ml-auto"></ul>
      <NavLink to="/" exact activeClassName={"activeLink"} className="nav-link">Korisnici</NavLink>
      <NavLink to="/add" activeClassName={"activeLink"}  className="nav-link">Unos</NavLink>
      <NavLink to="/edit" activeClassName={"activeLink"}  className="nav-link">Izmeni/Obriši</NavLink>
    </nav>
  )
}
export default Header;
