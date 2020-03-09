import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerAppComponent } from './pages/container-app/container-app.component';


const routes: Routes = [
  {
    path: '',
    component: ContainerAppComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import("./pages/home/home.module").then(m => m.HomeModule)
      },
      {
        path: 'authors',
        loadChildren: () =>
          import("./pages/authors/authors.module").then(m => m.AuthorsModule)
      },
      {
        path: 'books',
        loadChildren: () =>
          import("./pages/books/books.module").then(m => m.BooksModule)
      },
      {
        path: "",
        redirectTo: "/home",
        pathMatch: "full"
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
