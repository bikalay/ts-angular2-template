import {Component, OnInit} from '@angular/core';
import {ItemService} from '../item.service';
import {ItemModel} from '../models/item.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'item-edit',
  templateUrl: './item.edit.component.html',
  providers: [ItemService]
})

export class ItemEditComponent implements OnInit {
  item: ItemModel = new ItemModel();
  itemId: string;

  constructor(private itemService: ItemService, private route: ActivatedRoute, private router: Router) {}


  onSubmit(itemForm:NgForm) {
    if(itemForm.valid) {
      if(this.itemId) {
        this.itemService.update({oid:this.itemId}, this.item).then(()=>{
          this.router.navigate(['item']);
        });
      }
      else {
        this.itemService.create(this.item).then(()=>{
          this.router.navigate(['item']);
        });
      }
    }
  }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params) => {
      const oid = this.itemId = params['oid'];
      if(oid) {
        this.itemService.get({oid}).then(item => {
          this.item = item;
        });
      }
    });
  }
}
