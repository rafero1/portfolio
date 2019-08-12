import React, { Component } from 'react'

export class Project extends Component {
    render() {

        const name = this.props.name;
        const tags = this.props.tags;
        const desc = this.props.desc;
        const img = "./img/" + this.props.img;

        return (
            <article className="project">
                <div className="row">
                    <div className="col-md is-center-aligned">
                        <img className="project-thumb has-shadow" src={img} alt={"Imagem do projeto: " + name}/>
                    </div>
                    <div className="col-md">
                        <div className="project-content">
                            <h4>{name}</h4>
                            <p className="is-tinted">{tags}</p>
                            <p>{desc}</p>
                        </div>
                    </div>
                </div>
            </article>
        )
    }
}

export default Project
