import React, { Component } from "react";
import walking from './walking.jpg';
 
class Use extends Component {
  render() {
    return (
      <div>
        <h2>How to use the app</h2>
        <p> 
          Shoe me the way is a new and accessible way to get around. It is currently a work in progress and we are prototyping using an arduino. The aim is to create a pair of shoes that will allow the user to sense how close they are to an object, this means that people with disabilities and impairements (especially visual), will be able to sense how near they are to an object and avoid it.
          The shoes will vibrate to let the user know that they are close. This app works alongside the shoes to allow the user to program in their destination. The next step will to be to link the shoes to the map so that the shoes can give directions and the user doesn't need to rely on the app as much.
          <br/>
          <br/>
          Use the map on the home page to program your destination and plan a route!
        </p>
        <img src={walking}  alt="logo" />
      </div>
    );
  }
}
 
export default Use;