import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from "rxjs";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {
  constructor(private http: Http, public url:string) {

  }

  get(data) {
    return this.send(this.url, 'get', data).toPromise().then((r: Response)=>{
      return r.json();
    });
  }

  query(data) {
    return this.send(this.url, 'get', data).toPromise().then((r: Response)=>{
      return {
        data:r.json(),
        pageCount:+r.headers.get('X-PageCount'),
        page: +r.headers.get('X-Page'),
        pageSize: +r.headers.get('X-PageSize'),
        total: +r.headers.get('X-Total')
      };
    });
  }

  create(options?:any, data?:any) {
    return this.send(this.url, 'post', options, data).toPromise().then((r: Response)=>{
      return r.json();
    });
  }

  remove(data) {
    return this.send(this.url, 'delete', data).toPromise().then((r: Response)=>{
      return r.json();
    });
  }

  update(options?:any, data?:any) {
    return this.send(this.url, 'put', options, data).toPromise().then((r: Response)=>{
      return r.json();
    });
  }

  protected beforeRequest() {

  };

  protected afterResponse() {

  };

  protected send(url:string, method:string, options?:any, data?:any) : Observable<Response> {
    console.log(url, method, options, processUrl(url, method, options));
    const headers = new Headers();

    switch(method) {
      case 'post':
      case 'put':
      case 'patch':
        return this.http[method](processUrl(url, method, options), data || options, {headers});
      case 'get':
      case 'head':
      case 'options':
      case 'delete':
        return this.http[method](processUrl(url, method, options), {headers});
      default:
        throw new Error('Unknown method');
    }
  }
}

export function processUrl(url:string, method:string, data:any) {
  method = method && method.toLowerCase();
  switch(method) {
    case 'post':
    case 'put':
    case 'patch':
      url = objectToParam(url, data, null, true);
      break;
    default:
      url = objectToParam(url, data);
      break;
  }
  return url.replace(/[\&\?]:[^\&\?]+/g, '')
    .replace(/\/:[^\&\?\/]+/g, '');
}

function objectToParam(url:string, obj:any, key?:string, skip?:boolean) {
  var fieldNames = Object.keys(obj);
  for(var i=0, length=fieldNames.length; i<length; i++) {
    var fieldName = fieldNames[i];
    var value = obj[fieldName];
    var _key = key ? key+'['+fieldName+']' : fieldName;
    switch(Object.prototype.toString.call(value)) {
      case '[object Object]':
        url = objectToParam(url, value, _key, skip);
        break;
      case '[object Array]':
        for(var j=0; j<value.length; j++) {
          url = updateUrl(url, _key, value[j], skip);
        }
        break;
      default:
        url = updateUrl(url, _key, value, skip);
        break;
    }
  }
  return url;
}

function updateUrl(url, key, value, skip) {
  var processed = skip || false;
  value = paramToString(value);

  var paramRegExp = new RegExp('(\/):'+key+'([\/\&\?]|$)','igm');
  var queryRegExp = new RegExp('[\&\?]:'+key, 'igm');
  var isFirstQueryParameter = !/\?[\w_\$]/.test(url);

  if(paramRegExp.test(url)) {
    url = url.replace(paramRegExp, '$1'+value+'$2');
    processed = true;
  }
  if(queryRegExp.test(url)) {
    url = url.replace(queryRegExp, isFirstQueryParameter ? '?'+key+'='+value : '&'+key+'='+value);
    processed = true;
  }
  if(!processed) {
    url = url + (isFirstQueryParameter ? '?'+key+'='+value : '&'+key+'='+value);
  }
  return url
}

function paramToString (value) {
  switch(Object.prototype.toString.call(value)) {
    case '[object Date]':
      return decodeURIComponent(value.toISOString());
    case '[object Object]':
    case '[object Array]':
      return decodeURIComponent(JSON.stringify(value));
    default:
      return decodeURIComponent(value);
  }
}
