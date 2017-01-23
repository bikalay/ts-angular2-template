import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { HttpService } from './services/http.service';
import { NumberArray } from './pipes/numberArray.pipe';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import {BootstrapModalModule} from 'ng2-bootstrap-modal';

@NgModule({
  declarations: [
    MenuComponent,
    NumberArray,
    PaginationComponent,
    ConfirmComponent,
  ],
  exports: [
    MenuComponent,
    NumberArray,
    PaginationComponent,
    ConfirmComponent
  ],
  imports: [ // import Angular's modules
    RouterModule,
    AngularCommonModule,
    BootstrapModalModule
  ],
  providers: [
    HttpService
  ],
  entryComponents: [
    ConfirmComponent
  ]
})
export class CommonModule {}
