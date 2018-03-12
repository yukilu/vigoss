interface categoryListsType {
    [index: string]: string[];
}

export interface ShowedLists {
    [index: string]: boolean;
}

export const CATEGORIES = ['SimplifiedSource', 'ImplementedByMyself', 'Algorithm'];

export const CATEGORIESLISTS: categoryListsType = {
    SimplifiedSource: ['simpleReact', 'simpleAdvancedReact', 'simpleRedux', 'simpleAdvancedRedux', 'simpleReactRedux'],
    ImplementedByMyself: ['MyPromise', 'MyRxJS', 'iQuery'],
    Algorithm: ['quickSort', 'heapSort']
};

const firstArticleTitle = CATEGORIESLISTS[CATEGORIES[0]][0];

const initialShowedLists: ShowedLists = {};
export const initialArticleTitle = getArticleTitle();
const initialCategory = getCategory(initialArticleTitle);
for (let i = 0; i < CATEGORIES.length; i++)
    initialShowedLists[CATEGORIES[i]] = false;
initialShowedLists[initialCategory] = true;

export { initialShowedLists };

export function getArticleTitle() {
    if (!localStorage.getItem('articleTitle'))
        localStorage.setItem('articleTitle', firstArticleTitle);

    return localStorage.getItem('articleTitle');
}

export function getCategory(articleTitle: string) {
    for (let category of CATEGORIES)
        for (let article of CATEGORIESLISTS[category])
            if (article === articleTitle)
                return category;
    
    return '';
}