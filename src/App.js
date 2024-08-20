import './App.css';
import Nav from './components/nav';
import Intro from './components/intro';
import Motivation from './components/motiv';
import Tech from './components/tech';
import Portfolio from './components/portfolio';

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
        <Portfolio />

      </body>
      <footer className={footerStyle}>

      </footer>
    </div>
  );
}

export default App;
