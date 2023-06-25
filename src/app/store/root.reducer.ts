import { BookStore, bookStoreReducer } from './bookstore.reducer';
import { ScoreStore, scoreReducer } from './score.reducer';

export interface MyAppState {
  scoreStore: ScoreStore;
  bookStore: BookStore;
}

export const rootReducer = {
  scoreStore: scoreReducer,
  bookStore: bookStoreReducer,
};

export const rootEffects = [];
