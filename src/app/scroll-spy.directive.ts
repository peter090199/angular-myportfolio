import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollSpy]'
})
export class ScrollSpyDirective {
  @Input() spyId: string='';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    this.checkIfInView();
  }

  private checkIfInView(): void {
    const element = this.el.nativeElement;
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const isInView = rect.top <= windowHeight && rect.bottom >= 0;

    // Update active class based on visibility
    if (isInView) {
      this.renderer.addClass(element, 'active');
      this.setActiveNavLink();
    } else {
      this.renderer.removeClass(element, 'active');
    }
  }

  private setActiveNavLink(): void {
    const links = document.querySelectorAll('.nav-link');
    links.forEach((link) => {
      const href = link.getAttribute('href')?.substring(1);
      if (href === this.spyId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
}
