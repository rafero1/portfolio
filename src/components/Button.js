import React, { Component } from 'react'

export class Button extends Component {
    render() {

        const text = this.props.text;
        const goto = this.props.goto;

         return <a className="btn btn-custom btn-lg" role="button" href={goto}>{text}</a>
    }
}

export default Button
