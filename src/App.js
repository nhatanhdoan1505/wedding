import './App.css';
import React, {useState} from 'react';
import Aux from './hoc/Axu';
import Invitation from './components/Invitation/Invitation';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history/history';
import MetaDecorator from './components/MetaDecorator/MetaDecorator';

function App() {
  const [songs] = useState([
    {
      src: "./music/song_1.mp3"
    },
    {
      src: "./music/song_2.mp3"
    },
    {
      src: "./music/song_3.mp3"
    },
    {
      src: "./music/song_4.mp3"
    }
  ]);



  return (  
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/:id" component={Invitation}/>
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;
