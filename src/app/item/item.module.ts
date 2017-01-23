import {
  NgModule
} from '@angular/core';

import {
  RouterModule,
  PreloadAllModules
} from '@angular/router';

import {ItemListComponent} from './list/item.list.component';
import {ItemDetailsComponent} from './details/item.details.component';
import {ItemEditComponent} from './edit/item.edit.component';
import { ROUTES } from './item.routes';
import { ItemService } from './item.service';
import {CommonModule as AngularCommonModule} from "@angular/common";
import { FormsModule } from '@angular/forms';
import {CommonModule} from "../common/common.module";
import {BootstrapModalModule} from 'ng2-bootstrap-modal';

@NgModule({
  declarations: [
    ItemListComponent,
    ItemDetailsComponent,
    ItemEditComponent
  ],
  imports: [
    AngularCommonModule,
    BootstrapModalModule,
    FormsModule,
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
