import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FormGroup, FormControl, Validators } from "@angular/forms";


@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {

  constructor(private routed: ActivatedRoute) { }

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
  }

  goEditBook(postBook) {

  }

}
