import {
  NgModule
} from '@angular/core';

import {
  RouterModule
} from '@angular/router';

import {
  MenuComponent
} from './components/menu/menu.component';

@NgModule({
  declarations: [
    MenuComponent
  ],
  exports: [
    MenuComponent
  ],
  imports: [ // import Angular's modules
    RouterModule
  ]
})
export class CommonModule {
  constructor() {}
}
