import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContainerAppComponent } from "./pages/container-app/container-app.component";
import { EditBookComponent } from "./pages/edit-book/edit-book.component";
import { NewBookComponent } from './pages/new-book/new-book.component';
import { NewAuthorComponent } from './pages/new-author/new-author.component';
import { EditAuthorComponent } from './pages/edit-author/edit-author.component';

const routes: Routes = [
  {
    path: "",
    component: ContainerAppComponent,
    children: [
      {
        path: "books",
        loadChildren: () =>
          import("./pages/home/home.module").then(m => m.HomeModule)
      },
      {
        path: "authors",
        loadChildren: () =>
          import("./pages/authors/authors.module").then(m => m.AuthorsModule)
      },
      { path: "", redirectTo: "/books", pathMatch: "full" }
    ]
  },
  {
    path: "book/:id",
    component: EditBookComponent
  },
  {
    path: "new-book",
    component: NewBookComponent
  },
  {
    path: "new-author",
    component: NewAuthorComponent
  },
  {
    path: "author/:id",
    component: EditAuthorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
