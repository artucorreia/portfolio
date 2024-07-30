import { Component } from '@angular/core';
import { Project } from '../../../../model/project';
import { ProjectService } from '../../../../services/project/project.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public projects: Project[] = [];

  constructor(private service: ProjectService) {}

  ngOnInit() {
    this.service.findAll().subscribe({
      next: projects => this.projects = projects,
      error: error => console.error(error)
    });
  }
}
