import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent implements OnInit {

  constructor(private router: Router) { }

  postBook = new FormGroup({
    nameBook: new FormControl('', Validators.required),
    yearBook: new FormControl('', Validators.required),
    languajeBook: new FormControl('', Validators.required),
    authorBook: new FormControl('', Validators.required),
    editorialBook: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
  }

  goHome(form: any) {
    console.log(form);
    this.router.navigate(['/books']);
  }

}
