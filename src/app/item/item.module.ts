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
import { ItemService } from './item.service';
import {CommonModule as AngularCommonModule} from "@angular/common";
import {CommonModule} from "../common/common.module";

@NgModule({
  declarations: [
    ItemListComponent
  ],
  imports: [
    AngularCommonModule,
    CommonModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules }),
  ],
  providers: [
    ItemService
  ]
})
export class ItemModule {
  constructor() {}
}
