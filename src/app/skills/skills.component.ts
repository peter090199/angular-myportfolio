import { Component, OnInit } from '@angular/core';
import { slideUpDownAnimation } from '../animation';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations:[slideUpDownAnimation]
})
export class SkillsComponent implements OnInit {

  constructor() { }
  skills = [
    { name: 'Angular', proficiency: 90 },
    { name: 'TypeScript', proficiency: 90},
    { name: 'C# OOP', proficiency: 90 },
    { name: 'Laravel', proficiency: 80},
    { name: 'PHP', proficiency: 80 },
    { name: 'Javascript', proficiency: 70 },
    { name: 'ReactJS', proficiency: 70 },
  ];
  ngOnInit(): void {
  }

}
