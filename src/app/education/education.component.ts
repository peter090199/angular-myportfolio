import { Component, OnInit } from '@angular/core';
import { slideUpDownAnimation } from '../animation';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  animations:[slideUpDownAnimation]
})
export class EducationComponent implements OnInit {
  education = [
    {
      degree: 'Bachelor of Science in Information Technology',
      institution: 'Cordova Public College',
      startDate: '20218',
      endDate: '2022',
      description: 'Studied various aspects of computer science including algorithms, data structures, and software engineering.Lead annual review of programs for course content and relevancy, work with College Director to identify and implement new programming, and analyze/review Graduate Employment levels with local market needs.'
    },
    
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
