import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stripHtml'
})
export class StripHtmlPipe implements PipeTransform {
  public transform(value: string, ...without: string[]) {
    return value.replace(/(<([^>]+)>)/ig, (tag) => {
      const tagName = tag.match(/(<\/?)(\w+)(\s+\w+.*?)?>/i)[2];
      return without.includes(tagName) ? tag : '';
    });
  }
}
