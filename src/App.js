import React from 'react';
import Header from './Components/Header';
import Featur from './Components/Featur';
import About from './Components/About';
import Presentation from './Components/Presentation';
import aboutimage from './images/about.png';
import aboutimage1 from './images/downloads.png';
import Contact from './Components/Contact';


function App() {
  return (
    <div className="App">
      <Header/>
      <Featur/>
      <About image={aboutimage} title='Comes With All You Need For Diay Life' button='Get The App' />
      <Presentation />
      <About image={aboutimage1} title='Download And Get The APP Now' button='Download' />
      <Contact />
    </div>
  );
}

export default App;
