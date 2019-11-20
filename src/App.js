
import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Callback from './Component/Callback';
import Home from './Component/Home';


function App() {

  return (
    <div className="App" >
      <Route exact path='/' component={Home} />
      <Route path='/callback' component={Callback} exact />
    </div>
  )
}

export default App;
