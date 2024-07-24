import { Component, OnInit } from '@angular/core';
import { slideUpDownAnimation } from '../animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations:[slideUpDownAnimation]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
