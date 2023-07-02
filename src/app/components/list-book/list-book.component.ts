import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  Book,
  BookStore,
  deleteBookAction,
  getAuthorAndBooksAction,
  sortBookByPublishDateAction,
  sortBookByTitleAction,
} from 'src/app/store/bookstore.reducer';
import { MyAppState } from 'src/app/store/root.reducer';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss'],
})
export class ListBookComponent implements OnInit {
  bookStore: BookStore = { author: {} };

  constructor(private store: Store<MyAppState>) {}

  ngOnInit(): void {
    this.store.subscribe((state) => {
      console.log(state.bookStore);
      this.bookStore = state.bookStore;
    });
    if (!this.bookStore?.author?.books?.length)
      this.store.dispatch(getAuthorAndBooksAction());
  }

  editBookHandler(index: number, bookItem: Book) {
    console.log(index, bookItem);
  }

  deleteBookHandler(index: number, bookItem: Book) {
    this.store.dispatch(deleteBookAction({ index: index }));
  }

  // SORTING OPTIONS
  sortByTitleHandler(ascOrder: boolean) {
    this.store.dispatch(sortBookByTitleAction({ asc: ascOrder }));
  }

  // SORTING OPTIONS
  sortByPublishDateHandler(ascOrder: boolean) {
    this.store.dispatch(sortBookByPublishDateAction({ asc: ascOrder }));
  }
}
