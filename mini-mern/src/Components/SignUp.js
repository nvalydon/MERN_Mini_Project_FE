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
        ((this.state.password === this.state.passwordValidate))? (this.state.password.length > 0)? this.loadWelcome():alert("Please enter a password") :alert("Password mismatch");
    }

    loadWelcome() {
        this.props.history.push('/welcome')
    }

    loadLogIn = (event) => {
        event.preventDefault();
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <NavBar></NavBar>
                <h1>Welcome! Please Register An Account!</h1>
                <br />
            <form name="inputForm" onSubmit={this.handleSubmit}>
                <InputBar name="username" place="Username" value={this.state.username} handleChange={this.handleChange} required></InputBar><br />
                <InputBar name="email" place="E-Mail" value={this.state.email} type="email" handleChange={this.handleChange} required></InputBar><br />
                <InputBar name="password" place="Password" id="signuppassword" value={this.state.password} type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" handleChange={this.handleChange} required></InputBar><br />
                <InputBar name="passwordValidate" place="Re-Enter Password" value={this.state.passwordValidate} type="password" handleChange={this.handleChange} required></InputBar><br />
                <input type="submit"></input>
            </form>
            <br />
            <input type="submit" value="Log in to existing account" onClick={this.loadLogIn}/>

            </div>
        );
    }
}