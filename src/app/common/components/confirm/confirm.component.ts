import {
  Component
} from '@angular/core';
import {DialogComponent} from "../dialog/dialog.component";
import {DialogService} from "../../services/dialog.service";

@Component({
  selector: 'confirm',
  templateUrl: './confirm.component.html'
})
export class ConfirmComponent extends DialogComponent {
  constructor(dialogService: DialogService) {
    super(dialogService);
  }
  confirm() {
    this.result = true;
    this.close();
  }
}
