import './App.css';
import React from 'react';
import Aux from './hoc/Axu';
import Home from './components/Home/Home';
import Couple from './components/Couple/Couple';
import Gallery from './components/Gallery/Gallery';
import Wedding from './components/Wedding/Wedding';

function App() {
  return (  
    <Aux>
        <Home/>
        <Couple/>
        <Wedding/>
        <Gallery/>
    </Aux>
  );
}

export default App;
