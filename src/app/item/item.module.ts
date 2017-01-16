import {
  NgModule
} from '@angular/core';

import {
  RouterModule,
  PreloadAllModules
} from '@angular/router';

import {
  ItemListComponent
} from './list/item.list.component';
import { ROUTES } from './item.routes';

@NgModule({
  declarations: [
    ItemListComponent
  ],
  imports: [
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules }),
  ]
})
export class ItemModule {
  constructor() {}
}
