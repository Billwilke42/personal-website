import './App.css';
import Header from '../Header/Header';
import BodyContainer from '../BodyContainer/BodyContainer'
import { Route } from 'react-router-dom'
import React from 'react'

const App = () => {
    return (
      <div className="App">
        <Route path='/'>
          <Header />
          <BodyContainer />
        </Route>
      </div>
    );
}

export default App;
