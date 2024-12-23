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
        imageUrl: "/assets/projects/helpdesk-grafmarques.png",
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
        name: "Rotas Inteligentes App",
        description: "Realizei a migração de um sistema hospedado na AWS para uma infraestrutura VPS. Configurei servidores, domínios e implementei Nginx para servir recursos de forma otimizada. No front-end, configurei PWA para oferecer uma experiência moderna aos usuários. Também implementei suporte ao protocolo HTTPS.",
        imageUrl: "/assets/projects/rotasinteligentes.png",
        deployUrl: null,
        repositoryUrl: null,
        active: true,
        professional: true,
        technologies: [
          Technology.NGINX,
          Technology.CERTBOT,
          Technology.AWS,
          Technology.PWA,
          Technology.DOCKER,
          Technology.GIT
        ]
      },
      {
        name: "TecFlix",
        description: "Desenvolvimento de uma plataforma de cursos totalmente grátis voltados para a área de T.I no geral, desde programação até redes e manutenção de computadores.",
        imageUrl: "/assets/projects/coming-soon.png",
        deployUrl: null,
        repositoryUrl: "https://github.com/artucorreia/TecFlixApp",
        active: false,
        professional: false,
        technologies: [
          Technology.ANGULAR,
          Technology.SPRING_BOOT,
          Technology.SPRING_SECURITY,
          Technology.JWT,
          Technology.JUNIT,
          Technology.MIGRATION,
          Technology.POTGRESQL,
          Technology.PAYMENT_API,
          Technology.NGINX,
          Technology.DOCKER,
          Technology.GIT,
        ]
      },
      {
        name: "CesMusic",
        description: "Desenvolvimento de um blog sobre música como parte do curso de Sistemas de Informação no Centro Universitário Cesmac em forma de projeto extensivo. Este projeto foi elaborado para atender a necessidade de consumir, divulgar e ensinar conteúdos sobre a união entre música e tecnologia.",
        imageUrl: "/assets/projects/coming-soon.png",
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
    ]
  }
}
