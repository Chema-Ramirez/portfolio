import Navbar from './components/Navbar';
import AboutMe from './components/Aboutme';
import Education from './components/Education'
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';
import SkillsCarousel from './components/SkillsCarousel';

function App() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '120px' }}>
        <AboutMe />
        <SkillsCarousel />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
