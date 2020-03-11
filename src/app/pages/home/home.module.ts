import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SearchPipe } from '../../shared/search.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomeComponent, SearchPipe],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ]
})
export class HomeModule { }
