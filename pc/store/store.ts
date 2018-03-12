import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { reducer, ReducerState } from './reducer';
import { CATEGORIES, initialArticleTitle, initialShowedLists, ShowedLists } from './data';

const preloadedState: ReducerState = {
    articleTitle: initialArticleTitle,
    articleContent: '',
    showedLists: initialShowedLists
};

export const store = createStore(reducer, preloadedState,  applyMiddleware(thunk));

// const unsubscribe = store.subscribe(() => { console.log(store.getState()); });