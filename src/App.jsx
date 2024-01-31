import './App.css';
import NavBar from './components/NavBar';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Partners from './components/Partners';
import Projects from './components/Projects';
import AnimatedSection from './components/AnimatedSection';
import projectImg from '../src/assets/project1.jpg'

function App() {
  return (
    <>
      <NavBar />
      <AnimatedSection >
        <AboutUs />
      </AnimatedSection>
      <AnimatedSection >
        <Projects
          id="Projetos"
          img={projectImg}
          title="Search Game"
          description="Um jogo mobile de caça palavras, com diferentes níveis de dificuldade e temas distintos."
        />
      </AnimatedSection>
      <AnimatedSection>
        <Partners />
      </AnimatedSection>
      <Footer />
    </>
  );
}

export default App;
