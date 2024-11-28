import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appHighlighting]',
  standalone: true,
})
export class HighlightingDirective {
  @Input() set appHighlighting(condition: boolean) {
    if (condition) {
      this.renderer.addClass(this.el.nativeElement, 'highlightFont');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'highlightFont');
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}
  @HostListener('mouseenter') onMouseEnter() {
    this.appHighlighting = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.appHighlighting = false;
  }
}
