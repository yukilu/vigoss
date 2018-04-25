import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import { BOOKS_READED, BOOKS_READING, BookLi } from './bookData';

interface Tags {
    [index: string]: string;
}

interface StateProps {
    tags: Tags;
    booksReaded: BookLi[];
    booksReading: BookLi[];
}

type Category = 'booksReaded' | 'booksReading';

interface TagPayload {
    category: Category;
    tag: string;
}

interface BooksMap {
    [index: string]: BookLi[];
}

const booksMap: BooksMap = {
    booksReaded: BOOKS_READED,
    booksReading: BOOKS_READING
};

const store = new Vuex.Store<StateProps>({
    state: {
        tags: {
            booksReaded: 'All',
            booksReading: 'All'
        },
        booksReaded: BOOKS_READED,
        booksReading: BOOKS_READING
    },
    mutations: {
        changeTag(state, payload: TagPayload) {
            const { category, tag } = payload;
            state.tags[category] = tag;
            if (tag === 'All')
                state[category] = booksMap[category];
            else
                state[category] = booksMap[category].filter((book: BookLi) => book.tag === tag);
        }
    }
});

export default store;