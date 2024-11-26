import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollingArrowComponent } from './scrolling-arrow.component';

describe('ScrollingArrowComponent', () => {
  let component: ScrollingArrowComponent;
  let fixture: ComponentFixture<ScrollingArrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollingArrowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollingArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
