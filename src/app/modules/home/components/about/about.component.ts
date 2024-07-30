import { Component } from '@angular/core';
import { Skill } from '../../../../model/skill';
import { SkillService } from '../../../../services/skill/skill.service';
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
  
  constructor(private service: SkillService) {}

  ngOnInit() {
    this.service.findAll().subscribe({
      next: skills => this.skills = skills,
      error: error => console.error(error)
    });
  }
}
