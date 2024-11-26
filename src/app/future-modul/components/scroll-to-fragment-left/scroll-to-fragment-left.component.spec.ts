import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollToFragmentLeftComponent } from './scroll-to-fragment-left.component';

describe('ScrollToFragmentLeftComponent', () => {
  let component: ScrollToFragmentLeftComponent;
  let fixture: ComponentFixture<ScrollToFragmentLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollToFragmentLeftComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollToFragmentLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
