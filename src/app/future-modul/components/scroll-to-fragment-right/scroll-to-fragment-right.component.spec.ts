import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollToFragmentRightComponent } from './scroll-to-fragment-right.component';

describe('ScrollToFragmentRightComponent', () => {
  let component: ScrollToFragmentRightComponent;
  let fixture: ComponentFixture<ScrollToFragmentRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollToFragmentRightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollToFragmentRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
