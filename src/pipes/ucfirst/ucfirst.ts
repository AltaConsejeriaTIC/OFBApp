import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ucfirst',
})
export class UcfirstPipe implements PipeTransform {
  public transform(value: string) {
    return value[0].toUpperCase() + value.substring(1);
  }
}
