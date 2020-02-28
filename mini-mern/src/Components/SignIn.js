import React, { Component } from 'react';
import InputBar from './InputBar';
import NavBar from "./NavBar"

export default class SignIn extends Component {

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
            <div >
                <NavBar></NavBar>
                <br />
            <form name="inputForm" onSubmit={this.handleSubmit}>
                <InputBar name="username" class="Username:" value={this.state.username} handleChange={this.handleChange}></InputBar><br />
                <InputBar name="password" class="Password:" value={this.props.password} handleChange={this.handleChange}></InputBar><br />
                <button>Submit</button>
            </form>
            </div>
        );
    }
}