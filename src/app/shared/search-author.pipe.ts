import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchAuthor'
})
export class SearchAuthorPipe implements PipeTransform {

  transform(authors: [], text: string): any[] {

    if ( text === '') {
      return authors;
    }

    return authors.filter( (item: any) => {
      return item.name.toLowerCase().includes(text.toLowerCase());
    });
  }

}
