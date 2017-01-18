import {
  Component, Input
} from '@angular/core';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html'
})
export class PaginationComponent {
  @Input() url: string;
  @Input() pageCount: number;
  @Input() page: number;
  @Input() sort: string;
  @Input() limit: number;
  constructor() {
  }
}
