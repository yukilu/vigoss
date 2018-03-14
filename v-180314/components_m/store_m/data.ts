interface categoryListsType {
    [index: string]: string[];
}

export const NAVTABS = ['Blog', 'Demo', 'Poem', 'About'];

export const CATEGORIES = ['SimplifiedSource', 'ImplementedByMyself', 'Algorithm'];

export const CATEGORIESLISTS: categoryListsType = {
    SimplifiedSource: ['simpleReact', 'simpleAdvancedReact', 'simpleRedux', 'simpleAdvancedRedux', 'simpleReactRedux'],
    ImplementedByMyself: ['MyPromise', 'MyRxJS', 'iQuery'],
    Algorithm: ['quickSort', 'heapSort']
};

const firstArticleTitle = CATEGORIESLISTS[CATEGORIES[0]][0];

export const initialArticleTitle = getArticleTitle();

export function getArticleTitle() {
    if (!localStorage.getItem('articleTitle'))
        localStorage.setItem('articleTitle', firstArticleTitle);

    return localStorage.getItem('articleTitle');
}