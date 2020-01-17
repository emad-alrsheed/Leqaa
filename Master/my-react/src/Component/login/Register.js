import React, { Component } from 'react'
import axios from "axios";
export default class Register extends Component {

  state = {
    email: "",
    password: "",
    name: "",

    cuntry: "",
    specilization: "",

    hasAgreed: false
  };

  submitRegister = () => {
    axios.post("http://localhost:9000/register", this.state).then(({ data }) => {
      console.log(data)
    }).catch((error) => { console.log("Error") })
    // console.log(this.state)
  }

  changeValue = (event) => {

    this.setState({ [event.target.name]: event.target.value })

  }



  render() {


    return (
      <div className="FormCenter">
        <div className="FormField">
          <label className="FormField__Label" htmlFor="name">
            Full Name
             </label>
          <input
            type="text"
            id="name"
            className="FormField__Input"
            placeholder="Enter your full name"
            name="name"
            onChange={this.changeValue}
            required
          />
        </div>
        <div className="FormField">
          <label className="FormField__Label" htmlFor="password">
            Password
            </label>
          <input
            type="password"
            id="password"
            className="FormField__Input"
            placeholder="Enter your password"
            name="password"
            onChange={this.changeValue}
            required
          />
        </div>
        <div className="FormField">
          <label className="FormField__Label" htmlFor="email">
            E-Mail Address
            </label>
          <input
            type="email"
            id="email"
            className="FormField__Input"
            placeholder="Enter your email"
            name="email"
            onChange={this.changeValue}
            required
          />
        </div>
        <input
          type="text"
          id="cuntry"
          className="FormField__Input"
          placeholder="Enter your cuntry"
          name="cuntry"
          onChange={this.changeValue}
          required
        />

        <input
          type="text"
          id="specilization"
          className="FormField__Input"
          placeholder="Enter your Specialization"
          name="specilization"
          onChange={this.changeValue}
          required
        />


        <div className="FormField">
          <button className="FormField__Button mr-20" onClick={this.submitRegister}>Sign Up</button>{" "}

        </div>
      </div>
    );
  }
}