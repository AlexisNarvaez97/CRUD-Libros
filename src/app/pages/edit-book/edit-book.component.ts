import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {

  constructor(private routed: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.routed.snapshot.paramMap.get('id');
    console.log('ID', id);
  }

}
