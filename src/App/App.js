import './App.css';
import Header from '../Header/Header';
import HomeBodyContainer from '../HomeBodyContainer/HomeBodyContainer'
import { Route } from 'react-router-dom'
import React from 'react'

const App = () => {
    return (
      <div className="App">
        <Route path='/'>
          <Header />
          <HomeBodyContainer />
        </Route>
      </div>
    );
}

export default App;
