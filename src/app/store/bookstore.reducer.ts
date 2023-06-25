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

export const initialState: BookStore = { author: {} };
export const bookStoreReducer = createReducer(
  initialState,

  on(getAuthorAndBooksAction, (state) => {
    return { ...state, loading: true };
  }),

  on(getAuthorAndBooksSuccessAction, (state, { response }) => {
    return { ...state, loading: false, author: response };
  })
);
