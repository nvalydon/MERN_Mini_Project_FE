import React, { Component } from 'react';
import InputBar from './InputBar';
import NavBar2 from "./NavBar2"

export default class WelcomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: ""
        };
    };

    render() {
        return (
            <div>
                <NavBar2></NavBar2>
                <br />
                <h1>Welcome! Here Are Your Details!</h1>
                <form name="inputForm">
                    <InputBar name="username" class="Username:   " value={this.state.username}></InputBar><br />
                    <InputBar name="email" class="E-Mail:   " value={this.state.email}></InputBar><br />
                </form>
            </div>
        );
    }
}