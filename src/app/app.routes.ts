import { Routes } from '@angular/router';
import { HomeprovideComponent } from './homeprovide/homeprovide.component';
import { ImprintComponent } from './pages/imprint/imprint.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  // <h2><a [routerLink]="["'/zeug', meinZeugID"]">Zeug</a></h2>
  // { 
  //   path: 'zeug/:id', component: ZeugComponent 
  // },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full',
  },
  { path: '', component: HomeprovideComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
