import { Component, OnInit } from '@angular/core';
import { slideUpDownAnimation } from '../animation'; // Adjust the import path as needed

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
  animations: [slideUpDownAnimation]
})
export class WorkComponent implements OnInit {
  workExperience = [
    {
      position: 'FullStack Developer',
      company: 'Mariosoft Solutions.',
      startDate: 'June 2022',
      endDate: 'Present',
      description: 'Developing and maintaining web applications using modern frameworks and technologies. Assisted in the development of various client projects, focusing on front-end development. Experience with Angular, TypeScript, and Laravel for maintaining company systems in Mariosoft Solutions.'
    },
    // Add more work experience items as needed
  ];

  constructor() { }

  ngOnInit(): void { }
}
