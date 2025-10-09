// src/components/NavBar.js
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom">
      <div className="container">
        <Link className="navbar-brand fw-semibold" to="/">My Music</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navcol-1" aria-controls="navcol-1" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="navcol-1" className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" end className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/new" className="nav-link">Add Album</NavLink>
            </li>
            <li className="nav-item">
              <a href="https://www.gcu.edu" className="nav-link" target="_blank" rel="noreferrer">GCU</a>
            </li>
          </ul>
          <span className="navbar-text small text-secondary">v1.0</span>
        </div>
      </div>
    </nav>
  );
}