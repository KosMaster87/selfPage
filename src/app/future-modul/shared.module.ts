import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightingDirective } from './directives/highlighting.directive';
import { CallActionButtonComponent } from './components/call-action-button/call-action-button.component';
import { toUpperCase } from './pipes/toUpperCase.pipe';

@NgModule({
  imports: [
    CommonModule,
    HighlightingDirective,
    CallActionButtonComponent,
    toUpperCase,
  ],
  exports: [HighlightingDirective, CallActionButtonComponent, toUpperCase],
})
export class SharedModule {}
