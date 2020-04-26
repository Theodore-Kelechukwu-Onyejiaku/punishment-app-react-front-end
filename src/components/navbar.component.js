import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark text-white navbar-expand-lg">
        <Link to="/" className="navbar-brand ">Punishment App</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link ">Punishments List</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link ">Create Punishment</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Create Punishee</Link>
          </li>
          <li className="navbar-item">
          <Link to="/how" className="nav-link">How to use?</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}