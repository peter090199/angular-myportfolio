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

  ngOnInit(): void {
  }

}
