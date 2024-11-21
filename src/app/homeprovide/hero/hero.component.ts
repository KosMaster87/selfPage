import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../future-modul/shared.module';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  imports: [TranslateModule, CommonModule, SharedModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {}
