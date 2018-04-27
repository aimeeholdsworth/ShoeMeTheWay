import React, { Component } from 'react';
import MapView from './views/MapView';
import './App.css';
import logo from './logo.png';
import './index.css';


import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Locations from "./Locations";
import Contact from "./Contact";
import Use from "./Use";
import PubNub from "./PubNub";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      applicationTitle: 'Shoe Me the Way Directions App'
    };
    /*eslint-disable no-undef*/
    this.mapboxClient = new MapboxClient('pk.eyJ1IjoiZGF2aWRybGVvbmFyZCIsImEiOiJjamNsN2VnYzUwNG16MzNreGppbGpqcHd0In0.GcQvoKtssuPIrW3AVmPR9g');
    /*eslint-enable no-undef*/
  }

  syncRouteToURL(route) {
    const pathname = `/${route.join('/')}`;
    if (this.props.location.pathname !== pathname) {
      this.props.history.push(pathname);
    }
  }

  render() {
     return (
      <HashRouter>
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Shoe Me The Way</h1>

          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/Use">How To Use</NavLink></li>
            <li><NavLink to="/Locations">Live Data</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
             <Route exact path="/" component={Home}/>
             <Route path="/Use" component={Use}/>
            <Route path="/Locations" component={Locations}/>
            <Route path="/contact" component={Contact}/>
             
          </div>
        </div>
        </HashRouter>
    );
  }
}

export default App;
