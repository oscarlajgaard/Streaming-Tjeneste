import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Movies from './components/pages/Movies';
import Search from './components/pages/Search';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <section className="main">
          <Switch>
            <Route path="/browse" component={Movies}/>
            <Route path="/search" component={Search}/>
            <Route excat path="/" component={Home}/>
          </Switch>
        </section>
      </Router>
    </>
  );
}

export default App;
