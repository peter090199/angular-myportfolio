import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollFade]'
})

export class ScrollFade {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'opacity 1s');
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    const top = this.el.nativeElement.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (top < windowHeight) {
      this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
    }
  }
}
