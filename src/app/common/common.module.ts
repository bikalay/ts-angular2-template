import { NgModule } from '@angular/core';
import {CommonModule as AngularCommonModule} from "@angular/common";
import { RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { HttpService } from './services/http.service';
import { NumberArray } from './pipes/numberArray.pipe';
import { PaginationComponent } from './components/pagination/pagination.component';
import { DialogService } from './services/dialog.service';
import { DialogHolderComponent } from './components/dialog-holder/dialog-holder.component';
import { ConfirmComponent } from './components/confirm/confirm.component';

@NgModule({
  declarations: [
    MenuComponent,
    NumberArray,
    PaginationComponent,
    DialogHolderComponent,
    ConfirmComponent
  ],
  exports: [
    MenuComponent,
    NumberArray,
    PaginationComponent,
    DialogHolderComponent,
    ConfirmComponent
  ],
  imports: [ // import Angular's modules
    RouterModule,
    AngularCommonModule
  ],
  providers: [
    HttpService,
    DialogService
  ],
  entryComponents: [
    ConfirmComponent
  ]
})
export class CommonModule {}
