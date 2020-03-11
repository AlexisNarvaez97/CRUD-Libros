import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {

  authors: [];

  constructor(private apiS: ApiService, private route: Router) { }

  ngOnInit(): void {
    this.apiS.getAuthors().subscribe( resp => {
      this.authors = resp;
      console.log(resp);
    });
    this.changeAuthors();
  }

  newAuthor() {
    this.route.navigate(['new-author']);
  }

  editAuthor(id: string) {
    this.route.navigate([`author/${id}`]);
  }

  deleteAuthor(id: number) {
    this.apiS.deleteAuthor(id).subscribe( ({data}: any) => {
      console.log(data.deleteAuthor);
    });
  }

  changeAuthors() {
    this.apiS.changeAuthorsListener().subscribe( ({data}: any) => {
      console.log(data.changeAuthors);
      this.authors = data.changeAuthors;
    });
  }


}
