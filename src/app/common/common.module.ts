import { NgModule } from '@angular/core';
import {CommonModule as AngularCommonModule} from "@angular/common";
import { RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { HttpService } from './services/http.service';
import { NumberArray } from "./pipes/numberArray.pipe";
import { PaginationComponent } from "./components/pagination/pagination.component";

@NgModule({
  declarations: [
    MenuComponent,
    NumberArray,
    PaginationComponent
  ],
  exports: [
    MenuComponent,
    NumberArray,
    PaginationComponent
  ],
  imports: [ // import Angular's modules
    RouterModule,
    AngularCommonModule
  ],
  providers: [
    HttpService
  ]
})
export class CommonModule {}
