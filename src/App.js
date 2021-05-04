import React from 'react';
import { Helmet } from 'react-helmet';
import ExperienceSection from './components/experience';
import HeroSection from './components/hero';
import Navbar from './components/navbar';
import ProjectSection from './components/projects';
import SkillSection from './components/skills';

function App() {
  return (
    <>
      <Helmet>
        <title>Kevin Portfolio</title>
        <meta name="Description" content="Perfect Portfolio" />
      </Helmet>
      <Navbar />
      <main className="mt-5">
        <HeroSection />
        <SkillSection />
        <ProjectSection />
        <ExperienceSection />
      </main>
    </>
  );
}

export default App;
