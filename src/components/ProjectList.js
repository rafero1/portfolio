import React, { Component } from 'react'
import { Project } from "./Project";

export class ProjectList extends Component {
    render() {

        // Titulo dessa lista
        var title_s = this.props.title;
        var title;
        if (title_s) {
            title = <h2 className="is-center-aligned">{this.props.title}</h2>;
        }

        // Projetos que deve mostrar
        const projects = this.props.projects.map((item) => {
            return (
                <div key={item.name} className="row">
                    <div className="col">
                        <Project
                            name={item.name}
                            tags={item.tags}
                            desc={item.desc}
                            link={item.link}
                            folder={item.folder}
                            imgs={item.imgs}
                        ></Project>
                    </div>
                </div>
            );
        });

        return (
            <section id="projects" className="project-list white">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            {title}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            {projects}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ProjectList
