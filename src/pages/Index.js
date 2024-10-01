import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const { PUBLIC_URL } = process.env;
const Index = () => (
  <Main
    description="John Huang's personal website. Brown University Applied Mathematics and Computer Science student."
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            Hello, my name is John Huang! &#128075; &#128187;
          </h2>
        </div>
      </header>
      <p>
        {' '}
        Welcome to my website! Please feel free to check out my{' '}
        <a href={`${PUBLIC_URL}/JohnHuangResume.pdf`} alt="John Huang Resume" target="_blank" rel="noreferrer">resume</a>, <Link to="/projects">projects</Link>, or{' '}
        <Link to="/contact">contact</Link> me.
      </p>
      <h2>About Me</h2>
      <p>
        I am currently an undergraduate at Brown University, pursuing a dual degree in Applied
        Mathematics and Computer Science. My passion for solving complex problems has led me to
        several exciting roles. I&apos;ve worked as a Bioinformatics and Data Science Intern at
        AbbVie, and I am now a Machine Learning Researcher at Brown University&apos;s Shu Lab,
        using Large Language Models to enhance the clinical note writing process.
        I&apos;m actively seeking internship opportunities for
        Summer 2025 in data science, machine learning, and software engineering.
      </p>
      <p>
        At Brown, I am a software engineer at Full Stack at Brown, where I develop web applications
        and software solutions for campus organizations. I&apos;m also a Full Stack
        Developer for 24cast.org, a live election prediction model. Through Hack@Brown, I play an
        active role on the Sponsorship team, fostering relationships with companies to secure
        sponsors, mentors, and speakers for our annual hackathon. In addition, I&apos;m a proud
        member of Brown&apos;s Salsa Club.&#128131;
      </p>
      <p>
        Beyond academics, I love staying active with basketball, running, and biking. I also enjoy
        discovering new music—lately, I have been enjoying Zach Bryan, Sade, The Cranberries, and
        Clairo—and I&apos;m always open to recommendations!
      </p>
    </article>
  </Main>
);

export default Index;
