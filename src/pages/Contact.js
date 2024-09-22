import React from 'react';
// import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
// import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact John Huang via email @ john_huang@brown.edu"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2>
            Contact &#128231;
          </h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to get in touch. You can email me at: </p>
        <a href="mailto:john_huang@brown.edu">john_huang@brown.edu</a>
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
