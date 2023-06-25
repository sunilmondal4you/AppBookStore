import { createAction, createReducer, on, props } from '@ngrx/store';

export interface Author {
  author?: string;
  birthday?: string;
  birthPlace?: string;
  bookList?: Book[];
}

export interface Book {
  imageUrl?: string;
  title?: string;
  purchaseLink?: string;
  PublishDate?: string;
}

export interface BookStore {
  author?: Author;
  loading?: boolean;
}

export const getAuthorAndBooksAction = createAction(
  'Get Author and Books Action'
);
export const getAuthorAndBooksSuccessAction = createAction(
  'Get Author and Books Success Action',
  props<{ author: any; bookList: any }>()
);

export const initialState: BookStore = { author: {} };
export const bookStoreReducer = createReducer(
  initialState,

  on(getAuthorAndBooksAction, (state) => {
    return { ...state, loading: true };
  }),

  on(getAuthorAndBooksSuccessAction, (state, { author }) => {
    return { ...state, loading: false, author };
  })
);
