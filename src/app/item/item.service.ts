import {HttpService} from '../common/services/http.service';
import {Http} from '@angular/http';
import {Injectable} from '@angular/core';


@Injectable()
export class ItemService extends HttpService {
  constructor (http: Http) {
    super(http, 'http://localhost:3001/api/v1/item/:oid');
  }
}
