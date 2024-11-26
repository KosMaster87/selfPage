import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightingDirective } from './directives/highlighting.directive';
import { CallActionButtonComponent } from './components/call-action-button/call-action-button.component';
import { toUpperCase } from './pipes/toUpperCase.pipe';
import { ScrollingArrowComponent } from './components/scrolling-arrow/scrolling-arrow.component';

@NgModule({
  imports: [
    CommonModule,
    HighlightingDirective,
    CallActionButtonComponent,
    toUpperCase,
    ScrollingArrowComponent,
  ],
  exports: [HighlightingDirective, CallActionButtonComponent, toUpperCase],
})
export class SharedModule {}
