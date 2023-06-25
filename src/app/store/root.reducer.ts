import { ScoreStore, scoreReducer } from './score.reducer';

export interface MyAppState {
  scoreStore: ScoreStore;
}

export const rootReducer = {
  scoreStore: scoreReducer,
};

export const rootEffects = [];
