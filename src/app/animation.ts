// src/app/animations/animations.ts
import { trigger, transition, style, animate } from '@angular/animations';

// Vertical Slide Up/Down Animation
export const slideUpDownAnimation = trigger('slideUpDownAnimation', [
  transition(':enter', [
    style({ transform: 'translateY(100%)', opacity: 0 }),
    animate('100ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
  ]),
  transition(':leave', [
    animate('300ms ease-in', style({ transform: 'translateY(100%)', opacity: 0 }))
  ])
]);

// Horizontal Slide Left/Right Animation
export const slideLeftRightAnimation = trigger('slideLeftRightAnimation', [
  transition(':enter', [
    style({ transform: 'translateX(-100%)', opacity: 0 }),
    animate('300ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
  ]),
  transition(':leave', [
    animate('300ms ease-in', style({ transform: 'translateX(100%)', opacity: 0 }))
  ])
]);


