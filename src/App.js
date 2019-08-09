import React from 'react';
import './App.css';
import Header from './components/Header';
import ProjectList from './components/ProjectList';

function App() {

  const PROJECTS = [
    { name: 'Tocha', tags: 'Android, Kotlin', desc: 'App com informações históricas de prédios e departamentos da UFC, suporte a pesquisa com FTS 3, scanner de QR codes e sistema gamificado de progressão e recompensas.', img: 'tocha/tocha-1.png'},
    { name: 'Portfólio', tags: 'HTML, CSS, Bootstrap, React', desc: 'Esse site! Foi feito com React e Bootstrap para me ajudar a aprendê-los.', img: 'folio.jpeg'}
  ]

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 black">
          <Header></Header>
        </div>
        <div className="col-md-9">
          <ProjectList title="Portfólio" projects={PROJECTS}></ProjectList>
        </div>
      </div>
    </div>
  );
}

export default App;
