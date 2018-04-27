import React, { Component } from "react";





class Contact extends Component {
  render() {
    return (
      <div>
        <h2>Got a question?</h2>
        <p>Contact us using the form below and we will get back to you as soon as possible</p><br/>
        <form action="https://formspree.io/aimeeholdsworth@hotmail.co.uk"
      method="POST">
    <label>Your Name</label><input type="text" name="name"/><br/>
    <label>Your Email Address</label><input type="email" name="_replyto"/><br/>
    <label>Your Message</label><textarea/> <br/>
    <input type="submit" value="Send"/>
</form>

      </div>

    );
  }
}
 
export default Contact;