import React, { Component } from 'react'

export default class Dashbord extends Component {
    render() {
        return (
            <div>
                Dashboard

                <button onClick={() => { console.log(localStorage.getItem("userID")) }}>Emad Alrasheed</button>
                <button onClick={() => { localStorage.removeItem("userID") }}>SignOut</button>
            
            </div>
        )
    }
}
