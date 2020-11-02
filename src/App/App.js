import './App.css';
import Header from '../Header/Header';
import HomeBodyContainer from '../HomeBodyContainer/HomeBodyContainer'
import ContactContainer from '../ContactContainer/ContactContainer'
import BlogContainer from '../BlogContainer/BlogContainer'
import { Route, Switch } from 'react-router-dom'
import React from 'react'

function App() {
    return (
      <main className="App">
        <Switch>
        <Route exact path='/'>
          <Header />
          <HomeBodyContainer />
        </Route>
          <Route path='/contact/'>
            <Header />
            <ContactContainer />
          </Route>
          <Route path='/blog/'>
            <Header />
            <BlogContainer />
          </Route>
        </Switch>
      </main>
    );
}

export default App;
