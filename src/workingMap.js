import React, { Component } from 'react';
import MapView from './views/MapView';
import './App.css';
import logo from './logo.png';


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
      <div className="app">
      <div className="center">
        <div className="app-header">
        
          
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Shoe Me The Way!</h1>
          <p>Get directions to your destination</p>
        </div>
        </div>
        <div className="app-content">
        <p>Welcome to shoe me the way</p>
          <MapView mapboxClient={this.mapboxClient} />
        </div>
      </div>
    );
  }
}

export default App;
