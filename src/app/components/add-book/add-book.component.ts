import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Book, addBookAction } from 'src/app/store/bookstore.reducer';
import { MyAppState } from 'src/app/store/root.reducer';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss'],
})
export class AddBookComponent implements OnInit {
  newBook: Book = {
    imageUrl: '',
    title: '',
    purchaseLink: '',
    PublishDate: '',
  };

  constructor(private store: Store<MyAppState>) {}

  ngOnInit(): void {}

  addBook() {
    let newBook = {
      imageUrl: this.newBook.imageUrl,
      title: this.newBook.title,
      purchaseLink: this.newBook.purchaseLink,
      PublishDate: this.newBook.PublishDate,
    };
    this.store.dispatch(addBookAction({ newBook: this.newBook }));
  }
}
