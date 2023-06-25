import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  BookStore,
  getAuthorAndBooksAction,
} from 'src/app/store/bookstore.reducer';
import { MyAppState } from 'src/app/store/root.reducer';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss'],
})
export class ListBookComponent implements OnInit {
  bookStore: BookStore | undefined;

  constructor(private store: Store<MyAppState>) {}

  ngOnInit(): void {
    this.store.dispatch(getAuthorAndBooksAction());

    this.store.subscribe((state) => {
      console.log(state.bookStore);
      this.bookStore = state.bookStore;
    });
  }
}
