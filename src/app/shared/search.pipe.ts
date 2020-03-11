import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './models/book.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(books: Book[], text: string): Book[] {

    if ( text === '') {
      return books;
    }

    return books.filter( (item: any) => {
      return item.name.toLowerCase().includes(text.toLowerCase());
    });
  }

}
