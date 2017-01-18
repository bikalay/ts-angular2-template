import { Routes } from '@angular/router';
import { ItemListComponent } from './list/item.list.component';
import { ItemDetailsComponent } from './details/item.details.component';
import { ItemEditComponent } from './edit/item.edit.component';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: 'item', component: ItemListComponent},
  { path: 'item/create', component: ItemEditComponent},
  { path: 'item/:oid', component: ItemDetailsComponent},
  { path: 'item/:oid/edit', component: ItemEditComponent}
];
