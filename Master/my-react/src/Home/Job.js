import React, { Component } from 'react'

export default class 
 extends Component {
    render() {
        return (
            <div className="container">
            <h2>This is the Feed Component!</h2>
            <h3>Current Jobs</h3>
            <ol>
                <li>
                    <div style={{padding:16, background: '#f9f9f9', border:'1px solid #ddd'}}>
                        <h4>Graphic Designer</h4>
                        <p>Need someone to create a logo!</p>
                    </div>
                </li>
                <li>
                    <div style={{padding:16, background: '#f9f9f9', border:'1px solid #ddd'}}>
                        <h4>Programmer</h4>
                        <p>Need someone to create my startup site!</p>
                    </div>
                </li>
                <li>
                    <div style={{padding:16, background: '#f9f9f9', border:'1px solid #ddd'}}>
                        <h4>Marketer</h4>
                        <p>Need someone to promote my startup site!</p>
                    </div>
                </li>
            </ol>
        </div>
        )
    }
}
