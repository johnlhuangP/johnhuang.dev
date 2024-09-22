import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>John Huang</h2>
        <p>
          <a href="mailto:john_huang@brown.edu">john_huang@brown.edu</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>Quick Intro</h2>
      <p>
        Hi, I&apos;m John. I am a undergraduate student at Brown University
        studying Applied Mathematics and Computer Science.
        This past summer, I was a <b>Bioinformatics and Data Science Intern</b> at
        AbbVie and I am currently a <b>Machine Learning Researcher</b> at Brown
        University in the Shu Lab using large language models to improve the clinical
        note writing process. I am passionate about solving problems and am
        constantly looking for new ways to learn and grow.
      </p>
      <ul className="actions">
        <li>
          <a href={`${PUBLIC_URL}/JohnHuangResume.jpg`} alt="John Huang Resume" target="_blank" rel="noreferrer" className="button">Resume</a>
          {/* {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )} */}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; John Huang <Link to="/">johnlhuang.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
