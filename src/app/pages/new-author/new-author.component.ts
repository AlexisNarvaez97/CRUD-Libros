import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from "@angular/forms";
import { RegisterAuthor } from '../../shared/models/author.interface';
import { ApiService } from '../../core/services/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-author',
  templateUrl: './new-author.component.html',
  styleUrls: ['./new-author.component.scss']
})
export class NewAuthorComponent implements OnInit {

  constructor(private apiS: ApiService, private router: Router) { }

  postAuthor = new FormGroup({
    nameBook: new FormControl('', Validators.required),
    lastnameBook: new FormControl('', Validators.required),
    emailBook: new FormControl('', Validators.required)
  });


  ngOnInit(): void {
  }

  addAuthor(form) {

    const newAuthor = {
      name: form.nameBook,
      lastname: form.lastnameBook,
      email: form.emailBook
    };
    console.log(newAuthor);
    this.apiS.registerAuthor(newAuthor).subscribe( (data: any) => {
      this.router.navigate(['/authors']);
      console.log(data);
    }, (err) => {
      console.log(err);
    });
  }

}
