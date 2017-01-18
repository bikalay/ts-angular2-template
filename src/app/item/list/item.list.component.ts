import {
  Component, OnInit
} from '@angular/core';

import {
  ItemService
} from '../item.service';
import {ItemModel} from '../models/item.model';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'item-list',  // <item-list></item-list>
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './item.list.component.html',
  providers: [ItemService]
})
export class ItemListComponent implements OnInit {
  items: Array<ItemModel>;
  pageCount: number;
  page: number;
  limit: number;
  sort: string;
  constructor(private itemService: ItemService, private route: ActivatedRoute) {
    this.items = [];
    this.pageCount = 0;
    this.page = 0;
    this.limit = 10;
  }
  ngOnInit(): void {
    console.log(this.route.queryParams);
    this.route.queryParams.subscribe((params:Params) => {
        this.page = params['page'] || 0;
        this.limit = params['limit'] || 10;
        this.sort = params['sort'] || null;
        const _params = {page: this.page, limit:this.limit, sort:this.sort};
        return this.itemService.query(_params).then((result)=>{
          this.items = result.data;
          this.pageCount = result.pageCount;
        });
      });
  }
}
