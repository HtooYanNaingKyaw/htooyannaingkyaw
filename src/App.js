
import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom';

import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

import Home from './layouts/Home';
import About from './layouts/About';
import Resume from './layouts/Resume';
import Service from './layouts/Services';
import Portfolio from './layouts/Portfolio';
import Contact from './layouts/Contact';
import NotFound from './layouts/NotFound';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/profile" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Redirect from="/" to="/profile" />
        <Route component={NotFound} />
      </Switch>   
    </div>
  );
}

export default App;
