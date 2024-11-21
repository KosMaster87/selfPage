import { CommonModule } from '@angular/common';

import {
  Component,
  AfterViewInit,
  ElementRef,
  ChangeDetectorRef,
  inject,
} from '@angular/core';

import { PortfolioDataService } from './../../../../shared/services/portfolioData/portfolio-data.service';
import { TranslateModule } from '@ngx-translate/core';
import { Project } from './../../../../models/project/project';
import { SharedModule } from '../../../../future-modul/shared.module';

@Component({
  selector: 'app-project',

  imports: [CommonModule, TranslateModule, SharedModule],
  templateUrl: './project.component.html',
  styleUrls: [
    './project.component.scss',
    './../../../../shared/styles/highlighting.scss',
  ],
})
export class ProjectComponent implements AfterViewInit {
  isHighlighted: boolean = false;
  public isVisible = false;
  private el: ElementRef = inject(ElementRef);
  private cdr: ChangeDetectorRef = inject(ChangeDetectorRef);
  data = inject(PortfolioDataService);
  projectsLength!: number;
  projects!: Project[];

  ngOnInit(): void {
    this.projectsLength = this.data.myProjects.length;
    this.projects = this.data.myProjects;
  }

  oddOrEven(num: number): string {
    return num % 2 === 0 ? 'even' : 'odd';
  }

  openLink(url: string) {
    window.open(url, '_blank');
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.isVisible = true;
            this.cdr.detectChanges();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(this.el.nativeElement);
  }
}
