import { Injectable } from '@angular/core';

import { Project } from './project';
import { PROJECTS } from './projects';

@Injectable()
export class ProjectService {
    getProjects(): Promise<Project[]> {
        return Promise.resolve(PROJECTS);
    }
    getProjectsSlowly(): Promise<Project[]> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getProjects()), 5000);
        });
    }
    getProject(id: number): Promise<Project> {
        return this.getProjects()
            .then(projects => projects.find(project => project.id === id));
    }
}
