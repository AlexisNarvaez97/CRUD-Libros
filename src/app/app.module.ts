import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphqlModule } from './graphql/graphql.module';
import { AuthorsComponent } from './pages/authors/authors.component';
import { ContainerAppComponent } from './pages/container-app/container-app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { TableComponent } from './shared/components/table/table.component';
import { EditBookComponent } from './pages/edit-book/edit-book.component';
import { NewBookComponent } from './pages/new-book/new-book.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NewAuthorComponent } from './pages/new-author/new-author.component';
import { EditAuthorComponent } from './pages/edit-author/edit-author.component';
import { RegisterComponent } from './shared/components/register/register.component';
import { LoginComponent } from './shared/components/login/login.component';
import { SearchAuthorPipe } from './shared/search-author.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    ContainerAppComponent,
    NavbarComponent,
    TableComponent,
    EditBookComponent,
    NewBookComponent,
    NewAuthorComponent,
    EditAuthorComponent,
    RegisterComponent,
    LoginComponent,
    SearchAuthorPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphqlModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
