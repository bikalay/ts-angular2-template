import {
  Component
} from '@angular/core';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'item-list',  // <item-list></item-list>
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './item.list.component.html'
})
export class ItemListComponent {
  constructor() {}
}
