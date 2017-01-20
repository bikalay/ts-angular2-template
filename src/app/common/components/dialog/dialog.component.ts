import {
  Component, Input, OnDestroy
} from '@angular/core';
import {DialogService} from "../../services/dialog.service";

@Component({
  selector: 'pagination'
})
export class DialogComponent implements OnDestroy {

  data: any = {};
  private resolve: any;
  protected result: any;

  constructor(protected dialogService: DialogService) {

  }

  fillData(data:any = {}) : Promise<any> {
   this.data = data;
   return new Promise((resolve)=>{
     this.resolve = resolve;
   });
  }
  close() {
    this.dialogService.removeDialog(this);
  }
  ngOnDestroy(): void {
    this.resolve(this.result);
  }
}
