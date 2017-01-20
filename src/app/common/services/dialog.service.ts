import {Injectable} from "@angular/core";
import {DialogHolderComponent} from "../components/dialog-holder/dialog-holder.component";

@Injectable()
export class DialogService  {

  //TODO: try to create component from service
  private dialogHolderComponent : DialogHolderComponent;
  initialize(dialogHolderComponent : DialogHolderComponent) {
    this.dialogHolderComponent = dialogHolderComponent;
  }
  addDialog(dialogData) {
    return this.dialogHolderComponent.addDialog(dialogData);
  }
  removeDialog(component) {
    return this.dialogHolderComponent.removeDialog(component);
  }
}
