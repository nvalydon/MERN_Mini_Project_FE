import React, { Component } from 'react';

export default class InputBar extends Component {
    render() {
        return (
            <div>
            <label htmlFor={this.props.name}>{this.props.class}</label>
            <input
                type={this.props.type || 'text'}
                placeholder={this.props.place || this.props.name || ''}
                onChange={this.props.handleChange}
                value={this.props.value || ''}
                name={this.props.name || ''}
            />
            </div>
        );
    }
}