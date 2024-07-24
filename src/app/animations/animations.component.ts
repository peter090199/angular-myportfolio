// src/app/animations/animations.component.ts
import { Component, OnInit } from '@angular/core';
import { slideUpDownAnimation,slideLeftRightAnimation } from '../animation';// Adjust the path as necessary

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css'],
  animations: [slideUpDownAnimation, slideLeftRightAnimation]
})
export class AnimationsComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}
