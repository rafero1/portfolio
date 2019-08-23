import React, { Component } from 'react'
import { Button } from "./Button";

export class Header extends Component {
    render() {
        return (
            <header id="site-header" className="page-header block black is-center-aligned">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <img className="site-logo" src="./logo@2x.png" alt="Rafael Avilar portfólio" />
                            <div className="content">
                                <p><span className="is-tinted">Olá!</span> Meu nome é <span className="is-tinted">Rafael</span>, e sou um estudante de <span className="is-tinted">Sistemas e Mídias Digitais</span> na <span className="is-tinted">Universidade Federal do Ceará</span>, em Fortaleza.</p>
                                <p>Minhas áreas primárias são <span className="is-tinted">Desenvolvimento Mobile</span> e <span className="is-tinted">Web (Front e Back)</span>.</p>
                                <p>Abaixo poderá encontrar alguns exemplos de projetos que desenvolvi.</p>
                            </div>
                            <nav>
                                <Button text="Projetos" goto="#projects"></Button>
                                <Button text="Contato" goto="#contact-info"></Button>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header
