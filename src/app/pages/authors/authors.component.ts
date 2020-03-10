import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {

  authors: [];

  constructor(private apiS: ApiService) { }

  ngOnInit(): void {
    this.apiS.getAuthors().subscribe( resp => { 
      this.authors = resp;
      console.log(resp);
    });
  }


  newBook() {

  }

  editBook() {

  }

  deleteBook() {

  }
}
