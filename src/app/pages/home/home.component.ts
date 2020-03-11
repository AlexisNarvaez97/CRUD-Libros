import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { Book } from '../../shared/models/book.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchText = '';

  books: Book[];

  constructor(private apiS: ApiService, private route: Router) {
    console.log(this.searchText);
   }

  ngOnInit(): void {
    this.apiS.getBooks().subscribe( (resp: any) => {
      this.books = resp;
      console.log(resp);
    });
    this.changeBooks();
  }

  editBook(id: string) {
    this.route.navigate([`book/${id}`]);
  }

  newBook() {
    console.log('Crear nuevo libro');
    this.route.navigate(['new-book']);
  }

  deleteBook(id: number) {
    console.log('Libro id', id);
    this.apiS.deleteBook(id).subscribe( ({data}: any) => {
      console.log(data);
    });
  }

  // Suscribirse al cambio de Books
  changeBooks() {
    this.apiS.changeBooksListener().subscribe(({data}: any) => {
      console.log(data);
      this.books = data.changeBooks;
    });
  }

  changeValor(event) {
    console.log(event);
    this.searchText = event;
  }

}
