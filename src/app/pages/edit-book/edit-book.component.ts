import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ApiService } from '../../core/services/api.service';
import { PostBook } from '../../shared/models/book.model';
import { SweetAlertService } from '../../core/services/sweet-alert.service';


@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {

  book: PostBook;

  id: number;
  authors;

  constructor(private routed: ActivatedRoute, private apiS: ApiService, private router: Router, private sweetA: SweetAlertService) { 
    this.authors = [];
    this.id = 0;
  }

  postEditBook = new FormGroup({
    nameBook: new FormControl('', Validators.required),
    yearBook: new FormControl('', Validators.required),
    languajeBook: new FormControl('', Validators.required),
    authorBook: new FormControl('', Validators.required),
    editorialBook: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    const id = this.routed.snapshot.paramMap.get('id');
    console.log('ID', id);
    const idNumber = Number(id);
    this.id = idNumber;
    this.getBook(idNumber);
    this.getAuthors();
  }

  getBook(id: number) {
    this.apiS.getBook(id).subscribe(resp => {
      console.log(resp);
      this.book = resp;
      this.initValues(this.book);
    });
  }

  getAuthors() {
    this.apiS.getAuthors().subscribe(data => {
      console.log("Authors", data);
      this.authors = data;
    });
  }

  initValues(book: PostBook) {
    this.postEditBook.patchValue({
      nameBook: book.name,
      yearBook: book.year,
      languajeBook: book.language,
      authorBook: book.author_id,
      editorialBook: book.editorial,
    });
  }

  goEditBook(form) {

    console.log(form);

    const newBookEdit = {
      name: form.nameBook,
      year: form.yearBook,
      author_id: form.authorBook,
      language: form.languajeBook,
      editorial: form.editorialBook
    };

    this.apiS.updateBook(this.id, newBookEdit).subscribe( ({data}: any) => {
      console.log(data);
      this.sweetA.showAlert('Libro actualizado', 'success', 1000);
      this.router.navigate(['/books']);
    });
  }

}
