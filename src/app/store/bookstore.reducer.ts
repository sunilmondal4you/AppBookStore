import { createAction, createReducer, on, props } from '@ngrx/store';

export interface Author {
  author?: string;
  birthday?: string;
  birthPlace?: string;
  books?: Book[];
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
  props<{ response: any }>()
);

export const deleteBookAction = createAction(
  'Delete Book Action',
  props<{ index: number }>()
);

export const initialState: BookStore = { author: {} };
export const bookStoreReducer = createReducer(
  initialState,

  on(getAuthorAndBooksAction, (state) => {
    return { ...state, loading: true };
  }),

  on(getAuthorAndBooksSuccessAction, (state, { response }) => {
    return { ...state, loading: false, author: response };
  }),

  on(deleteBookAction, (state, { index }) => {
    let books: Book[] = state.author?.books || [];
    let filteredBooks: Book[] = books.filter((item, iindex) => index != iindex);

    let newAuthor = { ...state.author, books: filteredBooks };
    return { ...state, author: newAuthor };
  })
);
