import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Book, addBookAction } from 'src/app/store/bookstore.reducer';
import { MyAppState } from 'src/app/store/root.reducer';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss'],
})
export class AddBookComponent implements OnInit {
  myForm = this.fb.group({
    imageUrl: ['', Validators.required],
    title: ['', Validators.required],
    purchaseLink: ['', Validators.required],
    PublishDate: ['', Validators.required],
  });

  newBook: Book | undefined;

  constructor(
    private store: Store<MyAppState>,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {}

  addBook() {
    let newBook: Book = {
      imageUrl: this.myForm.value.imageUrl || '',
      title: this.myForm.value.title || '',
      purchaseLink: this.myForm.value.purchaseLink || '',
      PublishDate: this.myForm.value.PublishDate || '',
    };

    this.store.dispatch(addBookAction({ newBook: newBook }));

    this.router.navigate(['/list-book']);
  }
}
