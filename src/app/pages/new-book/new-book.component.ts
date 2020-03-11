import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ApiService } from '../../core/services/api.service';
import { author } from '../../core/operations/query';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent implements OnInit {

  authors;

  constructor(private router: Router, private apiS: ApiService) { 
    this.authors = [];
  }

  postBook = new FormGroup({
    nameBook: new FormControl('', Validators.required),
    yearBook: new FormControl('', Validators.required),
    languajeBook: new FormControl('', Validators.required),
    authorBook: new FormControl('', Validators.required),
    editorialBook: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this.getAuthors();
  }

  goHome(form: any) {
    console.log(form);
    this.router.navigate(['/books']);
  }

  getAuthors() {
    this.apiS.getAuthors().subscribe( data => {
      console.log('Authors', data);
      this.authors = data;
    });
  }

}
