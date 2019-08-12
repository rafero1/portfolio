import React, { Component } from 'react'

export class GotoTopButton extends Component {
    render() {
        const goto = this.props.goto;

        return <a className="btn btn-custom btn-image btn-lr-hover" role="button" href={goto}><i className="material-icons md-18">arrow_upward</i></a>
    }
}

export default GotoTopButton
