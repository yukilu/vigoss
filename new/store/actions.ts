import axios from 'axios';

import  { ShowedLists } from './data';

// const URL= 'http://127.0.0.1:3000';
const URL = 'https://www.vigoss.top';

export interface ActionType {
    type: string;
    articleTitle?: string;
    articleContent?: string;
    category?: string;
    showedLists?: ShowedLists;
}

export function changeArticle(articleTitle: string): ActionType {
    return {
        type: 'CHANGE_ARTICLE',
        articleTitle
    };
}

export function changeShowedLists(category: string) {
    return {
        type: 'CHANGE_SHOWEDLISTS',
        category
    }
}

export function requestArticle(): ActionType {
    return {
        type: 'REQUEST_ARTICLE',
        articleContent: 'fetching...'
    };
}

export function receiveArticle(articleContent: string): ActionType {
    return {
        type: 'RECEIVE_ARTICLE',
        articleContent
    };
}

export function fetchArticle(title: string) {
    return function (dispatch, getState) {
        dispatch(requestArticle());
        localStorage.setItem('articleTitle', title);
        const cachedHTML = sessionStorage.getItem(title);
        if (cachedHTML)
            return dispatch(receiveArticle(cachedHTML));
        return axios.get(`${URL}/md/${title}`).then(res => {
            const json = res.data;
            dispatch(receiveArticle(json.html));
            sessionStorage.setItem(json.title, json.html);
        }, err => console.log(err));
    };
}