import React, { Component } from 'react'

export class ContactInfo extends Component {
    render() {
        return (
            <section id="contact-info" className="contact-info block black is-center-aligned">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2>Contato</h2>
                            <div className="content">
                                <p>Se quiser me contactar, pode mandar um email ou dar um oi no <i>zap</i>.</p>
                                <p className="link">
                                    <i className="material-icons">alternate_email</i> <a href="mailto:rfl.avilar@outlook.com">rfl.avilar@outlook.com</a>
                                </p>
                                <p className="link">
                                    <i className="material-icons">phone</i> <a href="tel:85999897611">(85) 99989-7611</a>
                                </p>
                                <p className="link">
                                    <i className="material-icons">public</i> <a href="https://github.com/rafero1">GitHub</a> / <a href="https://linkedin.com/in/rafael-avilar">LinkedIn</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ContactInfo
