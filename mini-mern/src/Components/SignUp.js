import React, { Component } from 'react';
import InputBar from './InputBar';
import NavBar from "./NavBar"

export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            passwordValidate: ""
        };
    };

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.username + '\n' + this.state.email + '\n' + this.state.password);
    }

    render() {
        return (
            <div>
                <NavBar></NavBar>
                <br />
                <p>Sign Up</p>
            <form name="inputForm" onSubmit={this.handleSubmit}>
                <InputBar name="Username" class="Username:" value={this.state.username} handleChange={this.handleChange} required></InputBar><br />
                <InputBar name="E-Mail" class="E-Mail:" value={this.state.email} type="email" handleChange={this.handleChange} required></InputBar><br />
                <InputBar name="Password" class="Password:" id="signuppassword" value={this.state.password} type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" handleChange={this.handleChange} required></InputBar><br />
                <InputBar name="Re-enter Password" class="Re-enter Password:" value={this.state.passwordValidate} type="password" handleChange={this.handleChange} required></InputBar><br />
                <input type="submit"></input>
            </form>
            </div>
        );
    }
}