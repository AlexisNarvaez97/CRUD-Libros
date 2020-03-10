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


  books: Book[];

  constructor(private apiS: ApiService, private route: Router) { }

  ngOnInit(): void {
    this.apiS.getBooks().subscribe( (resp: any) => {
      this.books = resp;
      console.log(resp);
    });
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
  }

}
