import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ApiService } from "../../core/services/api.service";
import { author } from "../../core/operations/query";
import { PostBook } from "../../shared/models/book.model";
import { SweetAlertService } from "../../core/services/sweet-alert.service";

@Component({
  selector: "app-new-book",
  templateUrl: "./new-book.component.html",
  styleUrls: ["./new-book.component.scss"]
})
export class NewBookComponent implements OnInit {
  authors;

  constructor(
    private router: Router,
    private apiS: ApiService,
    private sweetA: SweetAlertService
  ) {
    this.authors = [];
  }

  postBook = new FormGroup({
    nameBook: new FormControl("", Validators.required),
    yearBook: new FormControl("", Validators.required),
    languajeBook: new FormControl("", Validators.required),
    authorBook: new FormControl("", Validators.required),
    editorialBook: new FormControl("", Validators.required)
  });

  ngOnInit(): void {
    this.getAuthors();
  }

  getAuthors() {
    this.apiS.getAuthors().subscribe(data => {
      console.log("Authors", data);
      this.authors = data;
    });
  }

  newBook(form) {
    const newBook = {
      name: form.nameBook,
      editorial: form.editorialBook,
      language: form.languajeBook,
      year: form.yearBook,
      author_id: form.authorBook
    };

    this.apiS.registerBook(newBook).subscribe(({ data }: any) => {
      console.log(data.registerBook);
      this.sweetA.showAlert("Book agregado", "success", 1000);
      this.router.navigate(["/books"]);
    });
  }
}
