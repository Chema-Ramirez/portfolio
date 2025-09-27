import HeaderInfoBar from './components/HeaderInfoBar';
import Navbar from './components/Navbar';
import AboutMe from './components/Aboutme';
import Education from './components/Education'
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <HeaderInfoBar />
      <Navbar />
      <main style={{ paddingTop: '120px' }}>
        <AboutMe />
        <Education />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export default App;
