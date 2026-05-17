import FallingPetals from './components/FallingPetals.jsx';
import Nav from './components/Nav.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Experience from './sections/Experience.jsx';
import Projects from './sections/Projects.jsx';
import Skills from './sections/Skills.jsx';
import Education from './sections/Education.jsx';
import Contact from './sections/Contact.jsx';

export default function App() {
  return (
    <>
      <FallingPetals count={26} />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
    </>
  );
}
