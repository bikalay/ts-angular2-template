import { Routes, RouterModule } from '@angular/router';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',   redirectTo: '/item', pathMatch: 'full' },
  { path: '**',    component: NoContentComponent },
];
