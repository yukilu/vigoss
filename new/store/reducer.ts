import { ActionType } from './actions';
import { ShowedLists, CATEGORIES } from './data';

export interface ReducerState {
    articleTitle: string;
    articleContent: string;
    showedLists: ShowedLists;
}

export function reducer(state: ReducerState, action: ActionType): ReducerState {
    switch(action.type) {
        case 'CHANGE_ARTICLE':
            return { ...state, articleTitle: action.articleTitle };
        case 'CHANGE_SHOWEDLISTS':
            let newShowedLists: ShowedLists = {};
            const showedLists = state.showedLists;
            const category = action.category;
            if (showedLists[category])
                newShowedLists = { ...showedLists, [category]: false };
            else {
                for (let c of CATEGORIES)
                    newShowedLists[c] = false;
                newShowedLists[category] = true;
            }
            return { ...state, showedLists: newShowedLists };
        case 'REQUEST_ARTICLE':
            return { ...state, articleContent: action.articleContent };
        case 'RECEIVE_ARTICLE':
            return { ...state, articleContent: action.articleContent };
        default:
            return state;
    }
}