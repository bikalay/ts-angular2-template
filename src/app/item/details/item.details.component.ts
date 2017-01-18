import {Component, OnInit} from '@angular/core';
import {ItemService} from '../item.service';
import {ItemModel} from '../models/item.model';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'item-details',
  templateUrl: './item.details.component.html',
  providers: [ItemService]
})

export class ItemDetailsComponent implements OnInit {
  item: ItemModel = null;
  itemId: string;

  constructor(private itemService: ItemService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params:Params) => {
      const oid = this.itemId = params['oid'];
      this.itemService.get({oid}).then(item => {
        this.item = item;
      });
    });
  }
}
