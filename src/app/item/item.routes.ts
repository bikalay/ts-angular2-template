import { Routes } from '@angular/router';
import { ItemListComponent } from './list/item.list.component';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: 'item', component: ItemListComponent}
];
