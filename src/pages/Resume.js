import React from 'react';
// import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
// import Skills from '../components/Resume/Skills';
// import Courses from '../components/Resume/Courses';
import References from '../components/Resume/References';

// import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import work from '../data/resume/work';
// import { skills, categories } from '../data/resume/skills';

// NOTE: sections are displayed in order defined.
const { PUBLIC_URL } = process.env;
const sections = {
  Education: () => <Education data={degrees} />,
  Experience: () => <Experience data={work} />,
  // Courses: () => <Courses data={courses} />,
  // Skills: () => <Skills skills={skills} categories={categories} />,
  References: () => <References />,
};

const Resume = () => (
  <Main
    title="Resume"
    description="John Huang's resume"
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2>
            <a href={`${PUBLIC_URL}/JohnHuangResume.jpg`} alt="John Huang Resume" target="_blank" rel="noreferrer">Resume</a>
          </h2>
          <div className="link-container">
            {Object.keys(sections).map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>
            ))}
          </div>
        </div>
      </header>
      {Object.entries(sections).map(([name, Section]) => (
        <Section key={name} />
      ))}
    </article>
  </Main>
);

export default Resume;
