import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'empty'
})
export class EmptyPipe implements PipeTransform {
  public transform(value: string, separator: string) {
    return value && value.length ? value : separator;
  }
}
