import React from 'react';
import './App.css';
import Header from './components/Header';
import ProjectList from './components/ProjectList';
import ContactInfo from './components/ContactInfo';
import GotoTopButton from './components/GotoTopButton';

function App() {

    const PROJECTS = [
        {
            name: 'Tocha',
            tags: 'Android, Kotlin, SQLite',
            desc: 'App com informações históricas de prédios e departamentos da UFC. Conta com um banco de dados SQLite, suporte a pesquisa FTS 4, scanner de QR codes e sistema gamificado de progressão e recompensas. O projeto foi produzido por uma equipe de 6 membros, onde atuei como programador e lider.',
            folder: 'tocha',
            imgs: [
                'tocha-thumb.png', 'tocha-1.png', 'tocha-2.png', 'tocha-3.png', 'tocha-4.png', 'tocha-5.png'
            ]
        },
        {
            name: 'Portfólio',
            tags: 'React, JavaScript, HTML, CSS, Bootstrap',
            desc: 'Portfólio simples para showcase de projetos no GitHub Pages. Responsívo e escalável, também incorpora um visualizador de imagens. Foram utilizados React e Bootstrap para me ajudar a aprendê-los.',
            folder: 'folio',
            imgs: [
                'folio-thumb.png'
            ]
        },
        {
            name: 'Requinte',
            tags: 'WordPress, JavaScript, HTML, CSS, Sass',
            desc: 'Site para comerciante desenvolvido com WordPress. Possui três páginas com layouts diferenciados, slider de produtos, contact form e suporta personalizações adicionais através do dashboard do administrador. Também foi utilizado Sass, JavaScript e JQuery.',
            folder: 'requinte',
            imgs: [
                'requinte-thumb.png', 'requinte-1.png', 'requinte-2.png', 'requinte-3.png', 'requinte-4.png'
            ]
        },
        {
            name: 'Infográficos',
            tags: 'Design',
            desc: 'Diversos infográficos produzidos ao longo da graduação. Para todos foram utilizados Illustrator e Photoshop, com um deles sendo um infográfico interativo produzido na ferramenta Protopie. Em todos contribui ativamente durante a concepção e produção.', link: 'https://bit.ly/304a7rt',
            folder: 'infografx',
            imgs: [
                'eu-1.png', 'comp-1.jpeg', 'color-1.png', 'color-2.jpg', 'color-3.png', 'waste-1.png'
            ]
        }
    ]

    return (
        <main>
            <Header></Header>
            <ProjectList title="Projetos" projects={PROJECTS}></ProjectList>
            <ContactInfo></ContactInfo>
            <GotoTopButton goto="#site-header"></GotoTopButton>
        </main>
    );
}

export default App;
