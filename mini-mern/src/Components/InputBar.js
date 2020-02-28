import React, { Component } from 'react';

export default class InputBar extends Component {
    render() {
        return (
            <div>
                {/* <label htmlFor={this.props.name}>{this.props.class}</label> */}
                <input
                    type={this.props.type || 'text'}
                    placeholder={this.props.place || this.props.name || ''}
                    onChange={this.props.handleChange}
                    value={this.props.value || ''}
                    name={this.props.name || ''}
                />
                <div>
                    {(this.props.id === "signuppassword") ? <div id="message">
                        <h3>Password must contain the following:</h3>
                        <p id="letter" class="invalid">A <b>lowercase</b> letter</p>
                        <p id="capital" class="invalid">A <b>capital (uppercase)</b> letter</p>
                        <p id="number" class="invalid">A <b>number</b></p>
                        <p id="length" class="invalid">Minimum <b>8 characters</b></p>
                    </div> : "" }
            </div>
            </div>
        );
    }
}