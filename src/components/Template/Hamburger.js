import React, { Suspense, lazy, useState } from 'react';

import { Link } from 'react-router-dom';
// import routes from '../../data/routes';
const { PUBLIC_URL } = process.env;
const Menu = lazy(() => import('react-burger-menu/lib/menus/slide'));

const Hamburger = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="hamburger-container">
      <nav className="main" id="hambuger-nav">
        <ul>
          {open ? (
            <li className="menu close-menu">
              <div onClick={() => setOpen(!open)} className="menu-hover">
                &#10005;
              </div>
            </li>
          ) : (
            <li className="menu open-menu">
              <div onClick={() => setOpen(!open)} className="menu-hover">
                &#9776;
              </div>
            </li>
          )}
        </ul>
      </nav>
      <Suspense fallback={<></>}>
        <Menu right isOpen={open}>
          <ul className="hamburger-ul">
            {/* {routes.map((l) => (
              <li key={l.label}>
                <Link to={l.path} onClick={() => setOpen(!open)}>
                  <h3 className={l.index && 'index-li'}>{l.label}</h3>
                </Link>
              </li>
            ))} */}
            <li key="John Huang">
              <Link to="/" onClick={() => setOpen(!open)}>
                <h3 className="index-li">John Huang</h3>
              </Link>
            </li>
            <li key="Resume">
              <a href={`${PUBLIC_URL}/JohnHuangResume.jpg`} alt="John Huang Resume" target="_blank" rel="noreferrer">
                <h3 className="index-li">Resume</h3>
              </a>
            </li>
            <li key="Projects">
              <Link to="/projects" onClick={() => setOpen(!open)}>
                <h3 className="index-li">Projects</h3>
              </Link>
            </li>
            <li key="Contact">
              <Link to="/contact" onClick={() => setOpen(!open)}>
                <h3 className="index-li">Contact</h3>
              </Link>
            </li>
          </ul>
        </Menu>
      </Suspense>
    </div>
  );
};

export default Hamburger;
