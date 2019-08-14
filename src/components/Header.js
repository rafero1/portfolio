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
                                <p><span className="is-tinted">Olá!</span> Meu nome é <span className="is-tinted">Rafael</span>, e atualmente estou estudando <span className="is-tinted">Sistemas e Mídias Digitais</span> na <span className="is-tinted">UFC</span> de Fortaleza.</p>
                                <p>Primariamente trabalho com <span className="is-tinted">webdev</span> no <span className="is-tinted">front-end</span>, <span className="is-tinted">WordPress</span> e também estou aprendendo <span className="is-tinted">back</span>. Logo abaixo de web, minha segunda área de maior experiência é <span className="is-tinted">mobile</span>, especialmente <span className="is-tinted">android nativo</span>.</p>
                                <p>Estou construindo esse site para servir de <span className="is-tinted">portfólio</span> e mostrar alguns dos projetos que desenvolvi até então.</p>
                                <p>Mais projetos estão a caminho ;)</p>
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
