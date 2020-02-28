import React, { Component } from 'react';
import InputBar from './InputBar';

export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: ""
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
            <form name="inputForm" onSubmit={this.handleSubmit}>
                <input placeholder="test"></input>
                {/* <p>
                    <InputBar name="username" type='text' value={this.state.username} handleChange={this.handleChange} ></InputBar>
                </p>
                <p>
                    <InputBar name="email" type='email' value={this.state.email} handleChange={this.handleChange}></InputBar>
                </p>
                <p>
                    <InputBar name="password" type='password' value={this.state.password} handleChange={this.handleChange}></InputBar>
                </p>
                <p>
                    <button>Submit</button>
                </p> */}
            </form>
        );
    }
}