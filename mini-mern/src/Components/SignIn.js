import React, { Component } from 'react';
import InputBar from './InputBar';
import NavBar from "./NavBar"

export default class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    };

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.username + '\n' + this.state.password);
    }

    render() {
        return (
            <div >
                <NavBar></NavBar>
                <br />
                <form name="inputForm" onSubmit={this.handleSubmit}>
                    <InputBar name="username" place="Username" value={this.state.username} handleChange={this.handleChange}></InputBar><br />
                    <InputBar name="password" place="Password" type="password" value={this.state.password} handleChange={this.handleChange}></InputBar><br />
                    <input type="submit" value="Log in" />
                </form>
                <br />
                <input type="submit" value="Register an account" />
            </div>
        );
    }
}