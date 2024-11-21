import { Routes } from '@angular/router';
import { HomeprovideComponent } from './homeprovide/homeprovide.component';
import { ImprintComponent } from './pages/imprint/imprint.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
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
