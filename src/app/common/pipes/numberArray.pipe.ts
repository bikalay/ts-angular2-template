import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'numberArray', pure:true})
export class NumberArray implements PipeTransform {
  transform(value, args:string[]) : any {
    let res = [];
    for (let i = 0; i < value; i++) {
      res.push(i+1);
    }
    return res;
  }
}

