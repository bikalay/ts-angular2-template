import {Injectable} from "@angular/core";
import {DialogHolderConponent} from "../components/dialog-holder/dialog-holder.component";
@Injectable()
export class DialogService  {
  dialogHolderComponent : DialogHolderConponent;
  addDialog(dialogData) {
    return this.dialogHolderComponent.addDialog(dialogData);
  }
  removeDialog(component) {
    return this.dialogHolderComponent.removeDialog(component);
  }
}
