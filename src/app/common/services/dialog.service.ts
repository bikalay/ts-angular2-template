import {
  Injectable, ComponentFactoryResolver, ApplicationRef, Injector, EmbeddedViewRef
} from "@angular/core";
import {DialogHolderComponent} from "../components/dialog-holder/dialog-holder.component";

@Injectable()
export class DialogService  {

  private dialogHolderComponent : DialogHolderComponent;

  constructor(private resolver: ComponentFactoryResolver, private applicationRef: ApplicationRef, private injector: Injector) {
    this.dialogHolderComponent = this.createDialogHolder();
  }

  addDialog(dialogData) {
    return this.dialogHolderComponent.addDialog(dialogData);
  }
  removeDialog(component) {
    return this.dialogHolderComponent.removeDialog(component);
  }
  private createDialogHolder(): DialogHolderComponent {
    let componentFactory = this.resolver.resolveComponentFactory(DialogHolderComponent);
    let componentRef = componentFactory.create(this.injector);
    let componentRootNode = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    let componentRootViewConainer = this.applicationRef['_rootComponents'][0];
    let rootLocation: Element =   (componentRootViewConainer.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;

    this.applicationRef.attachView(componentRef.hostView);

    componentRef.onDestroy(() => {
      this.applicationRef.detachView(componentRef.hostView);
    });

    rootLocation.appendChild(componentRootNode);

    return componentRef.instance;
  }
}
