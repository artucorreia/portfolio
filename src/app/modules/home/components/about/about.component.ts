import { Component } from '@angular/core';
import { Skill } from '../../../../model/skill';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  
  public skills: Skill[] = [
    {
      name: 'Spring Boot', 
      logo: '/assets/png/spring-boot.png'
    },
    {
      name: 'Java', 
      logo: '/assets/png/java.png'
    },
    {
      name: 'Angular', 
      logo: '/assets/png/angular.png'
    },
    {
      name: 'TypeScript', 
      logo: '/assets/png/typescript.png'
    },
    {
      name: 'PostegreeSQL', 
      logo: '/assets/png/postgreesql.png'
    },
    {
      name: 'MySQL', 
      logo: '/assets/png/mysql.png'
    },
    {
      name: 'JWT', 
      logo: '/assets/png/jwt.png'
    },
    {
      name: 'GIT', 
      logo: '/assets/png/git.png'
    }
  ]
}
