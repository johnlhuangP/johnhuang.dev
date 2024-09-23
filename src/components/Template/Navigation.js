import React from 'react';
import { Link } from 'react-router-dom';

import Hamburger from './Hamburger';
// import routes from '../../data/routes';

// Websites Navbar, displays routes defined in 'src/data/routes'
const { PUBLIC_URL } = process.env;
const Navigation = () => (
  <header id="header">
    <h1 className="index-link">
      <Link key="John Huang" to="/">
        John Huang
      </Link>
    </h1>
    <nav className="links">
      <ul>
        {/* {routes
          .filter((l) => !l.index)
          .map((l) => (
            <li key={l.label}>
              <Link to={l.path}>{l.label}</Link>
            </li>
          ))} */}
        <li key="Resume">
          <a href={`${PUBLIC_URL}/JohnHuangResume.pdf`} alt="John Huang Resume" target="_blank" rel="noreferrer">Resume</a>
        </li>
        <li key="Projects">
          <Link to="/projects">Projects</Link>
        </li>
        <li key="Contact">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
    <Hamburger />
  </header>
);

export default Navigation;
