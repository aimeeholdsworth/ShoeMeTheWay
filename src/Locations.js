import React, { Component } from "react";
import PubNub from "./PubNub";
 
class Locations extends Component {
  render() {
    return (
      <div>
        <h2>Data from your shoes</h2>
        <p>Below you can see live data from your shoes when they are connected and running.</p>
                  
        <PubNub/>
        
      </div>
    );
  }
}

export default Locations;