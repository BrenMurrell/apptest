import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Project } from './project';
import { ProjectService } from './project.service';

@Component({
  selector: 'my-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
  project: Project[];
  isClassOpen: boolean = false;
  selectedProject = "";
  constructor(
    private ProjectService: ProjectService,
    private router: Router
  ){ }
  title = 'Projects';
  ngOnInit() : void {
    this.getProjects();
  }

  // onSelect(project: Project): void {
  //   this.selectedProject = project;
  // }




  getProjects(): void {
    this.ProjectService.getProjects().then(projects => this.projects = projects);
  }
  getProject(id): void {
    this.ProjectService.getProject(id); //.then(projects => console.log(projects));
  }
  
  selectProject(project, event) {
      this.router.navigate(['/projects', project.id]);
      this.selectedProject = project;
      this.isClassOpen = !this.isClassOpen;
  }
    closeOverlay() {
      this.isClassOpen = !this.isClassOpen;

    }

}