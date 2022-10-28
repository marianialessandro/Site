import logo from './logo.svg';
import './App.css';

import LeftAside from "./components/aside/left/LeftAside"
import Presentation from "./section/presentation"
import About from "./section/about"
import Footer from "./components/footer/footer"
import Contacts from "./section/contact"
import Header from "./components/header/header"
import Skills from "./section/skills"

function App() {

    return(
        <div className="App">
            <Presentation />
            <About />
            <Skills />
            <Contacts />
            <Footer />
        </div>
    );

    /*
  return (
    <div className="App">
      <Presentation /> 
      <About />
      <Skills />
      <Contacts />
      <Footer />
    </div>
  );
     */
}

export default App;
