import {Component, ViewChild, ViewContainerRef, ComponentFactoryResolver} from "@angular/core";
import {DialogService} from "../../services/dialog.service";
import {ConfirmComponent} from "../confirm/confirm.component";
import {DialogComponent} from "../dialog/dialog.component";

@Component({
  selector: 'dialog-holder',
  template: '<div class="dialog-holder" #element></div>',

})
export class DialogHolderConponent {

  @ViewChild('element', {read: ViewContainerRef}) private anchor: ViewContainerRef;

  dialogs: Array<any> = [];

  constructor(private resolver: ComponentFactoryResolver, private dialogService: DialogService) {
    this.dialogService.dialogHolderComponent = this;
  }

  addDialog(dialogData) {
    let factory = this.resolver.resolveComponentFactory(dialogData.component);
    let componentRef = this.anchor.createComponent(factory);
    let component: DialogComponent = <DialogComponent> componentRef.instance;
    this.dialogs.push(component);
    return component.fillData(dialogData.data);
  }

  removeDialog(component) {
    var index = this.dialogs.indexOf(component);
    if(index>-1) {
      this.anchor.remove(index);
      this.dialogs.splice(index, 1);
    }
  }
}
