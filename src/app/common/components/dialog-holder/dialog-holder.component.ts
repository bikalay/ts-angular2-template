import {Component, ViewChild, ViewContainerRef, ComponentFactoryResolver} from "@angular/core";
import {DialogService} from "../../services/dialog.service";
import {DialogComponent} from "../dialog/dialog.component";

@Component({
  selector: 'dialog-holder',
  template: '<div class="dialog-holder" #element></div>',
})
export class DialogHolderComponent {

  @ViewChild('element', {read: ViewContainerRef}) private anchor: ViewContainerRef;

  dialogs: Array<any> = [];

  constructor(private resolver: ComponentFactoryResolver, private dialogService: DialogService) {
    this.dialogService.initialize(this);
  }

  addDialog(dialogData) {
    let factory = this.resolver.resolveComponentFactory(dialogData.component);
    let componentRef = this.anchor.createComponent(factory, dialogData.index);
    let component: DialogComponent = <DialogComponent> componentRef.instance;
    if(typeof(dialogData.index) !== 'undefined') {
      this.dialogs.splice(dialogData.index, 0, component)
    }
    else {
      this.dialogs.push(component);
    }
    return component.fillData(dialogData.data);
  }

  removeDialog(component) {
    let index = this.dialogs.indexOf(component);
    if(index>-1) {
      this.anchor.remove(index);
      this.dialogs.splice(index, 1);
    }
  }
}
