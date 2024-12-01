import { Injectable } from '@angular/core';
import { Project } from '../../../models/project/project';

@Injectable({
  providedIn: 'root',
})
export class PortfolioDataService {
  projects: Project[] = [
    {
      projectName: 'join',
      description: 'German text',
      alt: 'Alternative Bildbezeichnung',
      img: 'assets/images/projects/Join.avif',
      linkToPage: 'https://join.dev2k.org/',
      linkToGit: 'https://github.com/KosMaster87/Join.git',
      headline: 'Javascript | CSS | HTML',
    },
    {
      projectName: 'loco',
      description: 'English text',
      alt: 'Alternative image designation',
      img: 'assets/images/projects/Loco.avif',
      linkToPage: 'https://el-pollo-loco.dev2k.org/',
      linkToGit: 'https://github.com/KosMaster87/El-pollo-loco.git',
      headline: 'Javascript | CSS | HTML',
    },
  ];

  myReferences = [
    {
      name: 'Marijan D.',
      position: 'Team Partner',
      reference: 'Top Kollege.',
    },
    {
      name: 'Martin X.',
      position: 'Team Partner',
      reference: 'Top Kollege.',
    },
    {
      name: 'Viktor Willhelm',
      position: 'DA Student',
      reference: 'Top Kollege.',
    },
  ];
}
