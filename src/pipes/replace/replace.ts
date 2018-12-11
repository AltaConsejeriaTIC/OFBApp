import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace'
})
export class ReplacePipe implements PipeTransform {
  public transform(value: string, searchvalue: string, newvalue: string = '') {
    return value.replace(searchvalue, newvalue);
  }
}
