import React from 'react';
import './App.css';
import Header from './components/Header';
import ProjectList from './components/ProjectList';
import ContactInfo from './components/ContactInfo';
import GotoTopButton from './components/GotoTopButton';

function App() {

  const PROJECTS = [
    { name: 'Tocha', tags: 'Android, Kotlin', desc: 'App com informações históricas de prédios e departamentos da UFC, banco de dados SQLite, suporte a pesquisa FTS 4, scanner de QR codes e sistema gamificado de progressão e recompensas.', img: 'tocha/tocha-1.png' },
    { name: 'Portfólio', tags: 'React, HTML, CSS, Bootstrap', desc: 'Portfólio simples para showcase dos projetos no GitHub Pages. Responsívo e escalável. Foram utilizados React e Bootstrap para me ajudar a aprendê-los.', img: 'folio/folio.png' },
    { name: 'Requinte', tags: 'WordPress, JavaScript, HTML, CSS, Sass', desc: 'Site para comerciante micro-enpreendedor desenvolvido com WordPress. Ele possui três páginas, um slider de imagems, contact form e suporta modificações pelo dashboard. Também foi utilizado Sass para o CSS.', img: 'requinte/requinte-1.png' }
  ]

  return (
    <main>
      <Header></Header>
      <ProjectList title="Portfólio" projects={PROJECTS}></ProjectList>
      <ContactInfo></ContactInfo>
      <GotoTopButton goto="#site-header"></GotoTopButton>
    </main>
  );
}

export default App;
