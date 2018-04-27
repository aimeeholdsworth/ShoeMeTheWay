import React, { Component } from "react";
import MapView from './views/MapView';
import logo from './logo.png';


class Home extends Component {
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
      
        
        
        
          <MapView mapboxClient={this.mapboxClient} />
        
      
    );
  }
}
 
export default Home;