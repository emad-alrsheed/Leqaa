import React, { Component } from 'react'
// import { Link } from "react-router-dom";
import axios from "axios";
export default class login extends Component {

  state = {
    email: "",
    password: "",
    message: ""

  };
  changeValue = (event) => {
    this.setState({ [event.target.name]: event.target.value })

  }

  sigin = () => {
    axios.get("http://localhost:9000/login?email=" + this.state.email + "&password=" + this.state.password + "")
      .then(({ data }) => {
        if (data.length != 0) {
          this.props.history.push("/dashboard")
        }
        else {
          this.setState({ message: "Pleasew Check On You Data" })
        }
      })
      .catch((error) => { console.log(error) })

  }



  render() {
    return (

      <div className="FormCenter">

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
          />
        </div>

        <div className="FormField">
          <button className="FormField__Button mr-20" onClick={this.sigin}>Sign In</button>

        </div>
        <div>{this.state.message}</div>
      </div>
    )
  }
}


