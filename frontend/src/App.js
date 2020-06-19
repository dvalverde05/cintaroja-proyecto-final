import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Nav from './components/Nav';
import Home from './views/home';
import MonsterDetail from './views/monsterDetail';
import NotFound from './views/notFound';

export default function App() {
  return (
    <Router>
      <div className="main-container">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/monsters" component={Home} />
          <Route path="/monsters/:name" component={MonsterDetail} />
          <Route exact path="/404" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}