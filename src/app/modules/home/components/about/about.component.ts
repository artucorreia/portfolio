import { Component } from '@angular/core';
import { Skill } from '../../../../model/skill';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  public skills: Skill[] = []
  
  constructor() {}

  ngOnInit() {
    this.skills = [
      {
        name: 'Spring Boot',
        imageUrl: 'assets/png/spring-boot.png'
      },
      {
        name: 'Java',
        imageUrl: 'assets/png/java.png'
      },
      {
        name: 'JWT',
        imageUrl: 'assets/png/jwt.png'
      },
      {
        name: 'Angular',
        imageUrl: 'assets/png/angular.png'
      },
      {
        name: 'TypeScript',
        imageUrl: 'assets/png/typescript.png'
      },
      {
        name: 'Scss',
        imageUrl: 'assets/png/sass.png'
      },
      {
        name: 'MySQL',
        imageUrl: 'assets/png/mysql.png'
      },
      {
        name: 'PostgreSQL',
        imageUrl: 'assets/png/postgresql.png'
      },
      {
        name: 'Git',
        imageUrl: 'assets/png/git.png'
      },
      {
        name: 'Docker',
        imageUrl: 'assets/png/docker.png'
      }
    ]
  }
}
