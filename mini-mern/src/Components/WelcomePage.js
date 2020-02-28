import React, { Component } from 'react';
import InputBar from './InputBar';
import NavBar2 from "./NavBar2"
import Axios from 'axios';

export default class WelcomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: ""
        };
    };
    componentDidMount =()=>{
        Axios.get("http://192.168.1.124:9090/users/get/"+this.props.username)
        .then((response)=>{
            this.setState({username:response.data.username,email:response.data.email});
        })
    }

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