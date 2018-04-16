import { ActionType } from './actions';
import { CATEGORIES } from './data';

export interface ReducerState {
    articleTitle: string;
    articleContent: string;
    showed: boolean;
}

export function reducer(state: ReducerState, action: ActionType): ReducerState {
    switch(action.type) {
        case 'CHANGE_ARTICLE':
            return { ...state, articleTitle: action.articleTitle };
        case 'CHANGE_SHOWED':
            return { ...state, showed: action.showed };
        case 'REQUEST_ARTICLE':
            return { ...state, articleContent: action.articleContent };
        case 'RECEIVE_ARTICLE':
            return { ...state, articleContent: action.articleContent };
        default:
            return state;
    }
}