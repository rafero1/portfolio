import React, { Component } from 'react'
import { Project } from "./Project";

export class ProjectList extends Component {
    render() {

        // Titulo dessa lista
        var title;
        if (this.props.title) {
            title = <h2>{this.props.title}</h2>;
        }

        // Projetos que deve mostrar
        const projects = [];
        this.props.projects.forEach((item) => {
            projects.push(
                <div className="row">
                    <div className="col">
                        <Project name={item.name} tags={item.tags} desc={item.desc} img={item.img}></Project>
                    </div>
                </div>
            );
        });

        return (
            <section className="project-list block">
                {title}
                <div className="row">
                    <div className="col">
                        {projects}
                    </div>
                </div>
            </section>
        )
    }
}

export default ProjectList
