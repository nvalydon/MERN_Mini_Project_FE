import React, { Component } from 'react';
import InputBar from './InputBar';
import NavBar from "./NavBar"

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
                <NavBar></NavBar>
                <br />
                <p>Welcome</p>
                <form name="inputForm">
                    <InputBar name="username" class="Username:   " value={this.state.username}></InputBar><br />
                    <InputBar name="email" class="E-Mail:   " value={this.state.email}></InputBar><br />
                </form>
            </div>
        );
    }
}