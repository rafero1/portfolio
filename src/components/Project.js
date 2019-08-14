import React, { Component } from 'react'
import Viewer from 'viewerjs';

export class Project extends Component {

    constructor(props) {
        super(props);

        const folder = './img/' + this.props.folder + '/';

        this.state = {
            name: this.props.name,
            tags: this.props.tags,
            desc: this.props.desc,
            folder: folder,
            imgs: this.props.imgs.map((filename) => {
                return (
                    folder + filename
                );
            }),
            id:   'img-' + translateId(this.props.name)
        };
    }

    componentDidMount() {
        // Cria o Viewer para a imagem desse projeto quando carregado o componente
        //const viewer =
        new Viewer(document.getElementById(this.state.id), {
            toolbar: {
                prev: true, next: true
            },
            shown() {
                // Por algum motivo, o modal muda o padding-right do html no desktop.
                // Essa linha não remove o problema, mas muda logo para 0.
                document.body.style.paddingRight = 0;
            },
        });
    }

    render() {

        // O loop que gera as demais imagems para o viewer.
        const imageLoop = this.state.imgs.map((imagePath, index) => {
            if (index !== 0) {
                return (
                    <img key={this.state.id + '-' + index} className="project-thumb"
                        src={imagePath}
                        alt={"Imagem do projeto: " + this.state.name}
                        style={{ display: 'none' }}
                    />
                );
            } else return null;
        });

        return (
            <article className="project">
                <div className="row">
                    <div id={this.state.id} className="col-md is-center-aligned thumb-container">
                        <img className="project-thumb has-shadow" src={this.state.imgs[0]} alt={"Imagem do projeto: " + this.state.name} />
                        {imageLoop}
                    </div>
                    <div className="col-md">
                        <div className="project-content block">
                            <h4>{this.state.name}</h4>
                            <p className="is-tinted">{this.state.tags}</p>
                            <p>{this.state.desc}</p>
                        </div>
                    </div>
                </div>
            </article>
        )
    }
}

function translateId(str) {
    return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/ /g, "-");
}

export default Project
