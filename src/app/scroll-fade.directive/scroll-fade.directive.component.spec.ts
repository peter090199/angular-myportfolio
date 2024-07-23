import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollFade } from './scroll-fade.directive.component';

describe('ScrollFade.DirectiveComponent', () => {
  let component: ScrollFade;
  let fixture: ComponentFixture<ScrollFade>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollFade ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollFade);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
