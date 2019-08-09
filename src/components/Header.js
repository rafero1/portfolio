import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <header className="page-header block">
            	<h1 className="page-title">Rafael Avilar</h1>
                <p><strong>Olá!</strong></p>
                <p>Meu nome é <strong>Rafael</strong>, e atualmente estou estudando <strong>Sistemas e Mídias Digitais</strong> na <strong>UFC</strong> de Fortaleza.</p>
                <p>Fiz esse sitezinho para servir de portfólio e mostrar alguns dos projetos que desenvolvi até agora.</p>
                <p>Eventualmente quero adquirir um domínio próprio e modificar um pouco esse site. Quem sabe adicionar mais coisinhas legais.</p>
                <p>Se quiser entrar em contato, pode usar o meu email ou <i>zapzap</i>.</p>
                <p>Abraços! :)</p>
        		<footer>
	                <p><a href="mailto:rfl.avilar@outlook.com">rfl.avilar@outlook.com</a></p>
	                <p><a href="tel:85999897611">(85) 99989-7611</a></p>
	                <p><a href="https://github.com/rafero1">GitHub</a> / <a href="https://linkedin.com/in/rafael-avilar">LinkedIn</a></p>
                </footer>
            </header>
        )
    }
}

export default Header
