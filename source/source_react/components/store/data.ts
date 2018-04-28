interface categoryListsType {
    [index: string]: string[];
}

export interface ShowedLists {
    [index: string]: boolean;
}

export const NAVTABS = ['Blog', 'Demo', 'Poem', 'About'];

export const CATEGORIES = ['SimplifiedSource', 'ImplementedByMyself', 'Algorithm'];

export const CATEGORIESLISTS: categoryListsType = {
    SimplifiedSource: ['simplePromise', 'simpleReact', 'simpleAdvancedReact', 'simpleRedux', 'simpleAdvancedRedux', 'simpleReactRedux'],
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

interface ALinkType {
    name: string;
    link: string;
}

interface DemoListsType {
    [index: string]: ALinkType[];
}

export const DEMO_CATEGORIES = ['transform', 'canvas'];

export const DEMO_LISTS: DemoListsType = {
    transform: [
        { name: '立方体', link: '#' },
        { name: '翻页效果', link: '#' }
    ],
    canvas: [
        { name: '捕鱼达人', link: '#' }
    ]
};