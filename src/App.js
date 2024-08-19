import './App.css';
import Nav from './components/nav';
import Intro from './components/intro';
import Motivation from './components/motiv';
import Tech from './components/tech';

function App() {

  const appStyle = "max-w-screen-xl mx-auto p-4";


  return (
    <div className={appStyle}>
      <header >
        <Nav />
      </header>
      <body className='"pt-12"'>
        <Intro />
        <Motivation />
        <Tech />


      </body>
      <footer>

      </footer>
    </div>
  );
}

export default App;
