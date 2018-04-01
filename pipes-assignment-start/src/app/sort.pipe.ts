import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.sort(
      (val1, val2) => {
        return val1.name > val2.name;
      }
    );
  }

}
