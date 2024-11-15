import { Component } from '@angular/core';
import { Project } from '../../../../model/project';
import { Technology } from '../../../../enums/technology';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public projects: Project[] = [];

  constructor() {}

  ngOnInit() {
    this.projects = [
      {
        name: "HelpDesk Grafmarques",
        description: "Desenvolvimento de um GLPI para a empresa Grafmarques. Este projeto foi elaborado para atender a demanda de ter um controle das solicitações feitas para os setores da empresa como um todo. Além da geração de relatórios para uma melhor análise dessas solicitações.",
        imageUrl: "/assets/png/helpdesk.png",
        deployUrl: null,
        repositoryUrl: null,
        active: true,
        professional: true,
        technologies: [
          Technology.SPRING_BOOT,
          Technology.POTGRESQL,
          Technology.SPRING_SECURITY,
          Technology.JWT,
          Technology.JUNIT,
          Technology.MIGRATION,
          Technology.DOCKER,
          Technology.GIT,
        ]
      },
      {
        name: "CesMusic",
        description: "Desenvolvimento de um blog sobre música como parte do curso de Sistemas de Informação no Centro Universitário Cesmac em forma de projeto extensivo. Este projeto foi elaborado para atender a necessidade de consumir, divulgar e ensinar conteúdos sobre a união entre música e tecnologia.",
        imageUrl: "/assets/jpg/coming-soon.jpg",
        deployUrl: null,
        repositoryUrl: "https://github.com/artucorreia/cesmusic-project",
        active: false,
        professional: false,
        technologies: [
          Technology.SPRING_BOOT,
          Technology.SPRING_SECURITY,
          Technology.JWT,
          Technology.JUNIT,
          Technology.MIGRATION,
          Technology.POTGRESQL,
          Technology.DOCKER,
          Technology.GIT,
        ]
      },
      {
        name: "Pokedex",
        description: "Desenvolvimento de uma aplicação de Pokedex, que permite ao usuário visualizar informações detalhadas sobre diversos Pokémons. Este projeto foi desenvolvido utilizando o framework Angular.",
        imageUrl: "/assets/jpg/pokedex.jpg",
        deployUrl: "https://artucorreia.github.io/pokedex/",
        repositoryUrl: "https://github.com/artucorreia/pokedex",
        active: true,
        professional: false,
        technologies: [
          Technology.ANGULAR,
          Technology.POKE_API,
        ]
      },
    ]
  }
}
