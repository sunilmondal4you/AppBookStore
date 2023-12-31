import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBookComponent } from './components/list-book/list-book.component';
import { AddBookComponent } from './components/add-book/add-book.component';

const routes: Routes = [
  { path: '', component: ListBookComponent },
  { path: 'list-book', component: ListBookComponent },
  { path: 'add-book', component: AddBookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
