import './App.css';
import Nav from './components/nav';
import Intro from './components/intro';
import Motivation from './components/motiv';
import Tech from './components/tech';
import Portfolio from './components/portfolio';
import ContactForm from './components/contactForm';
import ProjectGrid from './components/projectGrid';

function App() {

  const appStyle = "max-w-screen-xl mx-auto p-4";
  const bodyStyle = "pt-12";
  const footerStyle = "";

  return (
    <div className={appStyle}>
      <header >
        <Nav />
      </header>
      <body className={bodyStyle}>
        <Intro />
        <Motivation />
        <Tech />
        <ProjectGrid />
        <Portfolio />
        <ContactForm />

      </body>
      <footer className={footerStyle}>

      </footer>
    </div>
  );
}

export default App;
