import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.scss']
})
export class EditAuthorComponent implements OnInit {

  constructor(private routed: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.routed.snapshot.paramMap.get('id');
    console.log('ID', id);
  }

}
