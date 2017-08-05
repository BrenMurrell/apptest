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
  selectedProject = Project;
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
    this.ProjectService.getProjects().then(projects => this. projects = projects);
  }
  // gotoDetail(): void {
  //   this.router.navigate(['/detail', this.selectedProject.id]);
  // }

}
