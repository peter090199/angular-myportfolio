import { ScrollSpyDirective } from './scroll-spy.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElementRef, Renderer2 } from '@angular/core';

describe('ScrollSpyDirective', () => {
  let directive: ScrollSpyDirective;
  let fixture: ComponentFixture<ScrollSpyDirective>;
  let elementRef: ElementRef;
  let renderer: Renderer2;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScrollSpyDirective],
      providers: [
        // Mock services or dependencies if needed
        { provide: ElementRef, useValue: { nativeElement: document.createElement('div') } },
        { provide: Renderer2, useValue: {} }
      ]
    });

    fixture = TestBed.createComponent(ScrollSpyDirective);
    directive = fixture.componentInstance;
    elementRef = TestBed.inject(ElementRef);
    renderer = TestBed.inject(Renderer2);

    // You can set initial values for directive inputs if necessary
    directive.spyId = 'testId';
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should add and remove active class on scroll', () => {
    // Arrange
    const spyId = 'home';
    directive.spyId = spyId;
    const element = elementRef.nativeElement;

    // Mock methods and properties if needed
    spyOn(renderer, 'addClass').and.callThrough();
    spyOn(renderer, 'removeClass').and.callThrough();

    // Act
    // Simulate scroll or change in visibility
    directive.onWindowScroll();

    // Assert
    expect(renderer.addClass).toHaveBeenCalled();
    expect(renderer.removeClass).toHaveBeenCalled();
  });

  // You may add more tests for other functionalities of the directive
});
