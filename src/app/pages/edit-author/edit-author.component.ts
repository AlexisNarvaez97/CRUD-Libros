import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService, UpdateAuthor } from "../../core/services/api.service";

import { FormGroup, FormControl, Validators } from "@angular/forms";
import { RegisterAuthor } from "../../shared/models/author.interface";
import { SweetAlertService } from "../../core/services/sweet-alert.service";

@Component({
  selector: "app-edit-author",
  templateUrl: "./edit-author.component.html",
  styleUrls: ["./edit-author.component.scss"]
})
export class EditAuthorComponent implements OnInit {
  user: RegisterAuthor;
  id: number;

  constructor(
    private routed: ActivatedRoute,
    private apiS: ApiService,
    private sweetA: SweetAlertService,
    private router: Router
  ) {}

  editAuthorForm = new FormGroup({
    nameBook: new FormControl("", Validators.required),
    lastnameBook: new FormControl("", Validators.required),
    emailBook: new FormControl("", Validators.required)
  });

  ngOnInit(): void {
    const id = this.routed.snapshot.paramMap.get("id");
    console.log("ID", id);
    const idNumber = Number(id);
    this.id = idNumber;
    this.getAuthor(idNumber);
  }

  getAuthor(id: number) {
    this.apiS.getAuthor(id).subscribe(resp => {
      console.log(resp);
      this.user = resp;
      this.initValues(this.user);
    });
  }

  initValues(user: RegisterAuthor) {
    this.editAuthorForm.patchValue({
      nameBook: user.name,
      lastnameBook: user.lastname,
      emailBook: user.email
    });
  }

  editAuthor(form) {
    const newAuthor: UpdateAuthor = {
      name: form.nameBook,
      lastname: form.lastnameBook
    };

    console.log("EL ID WE", this.id);

    this.apiS.updateAuthor(this.id, newAuthor).subscribe(
      ({ data }: any) => {
        console.log(data.updateAuthor);
        this.sweetA.showAlert('Author Update', 'success', 1000);
        this.router.navigate(['/authors']);
      },
      err => console.error(err)
    );

    console.log(newAuthor);
  }
}
