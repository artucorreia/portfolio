import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CapeComponent } from '../../components/cape/cape.component';
import { AboutComponent } from '../../components/about/about.component';
import { ProjectsComponent } from '../../components/projects/projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    CapeComponent,
    AboutComponent,
    ProjectsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
