interface categoryListsType {
    [index: string]: string[];
}

export interface ShowedLists {
    [index: string]: boolean;
}

export const CATEGORIES = ['source', 'languages', 'algorithm'];

export const CATEGORIESLISTS: categoryListsType = {
    source: ['simpleRedux', 'simpleReact', 'promise'],
    languages: ['javascript', 'typescript', 'java'],
    algorithm: ['quickSort', 'heapSort']
};

const initialShowedLists: ShowedLists = {};
for (let i = 0; i < CATEGORIES.length; i++) {
    if (!i) 
        initialShowedLists[CATEGORIES[i]] = true;
    else
        initialShowedLists[CATEGORIES[i]] = false;
}

export { initialShowedLists };

export const initialArticleTitle = CATEGORIESLISTS[CATEGORIES[0]][0];

export function getArticleTitle() {
    if (!localStorage.getItem('articleTitle'))
        localStorage.setItem('articleTitle', initialArticleTitle);

    return localStorage.getItem('articleTitle');
}

export function getCategory(articleTitle: string) {
    for (let category of CATEGORIES)
        for (let article of CATEGORIESLISTS[category])
            if (article === articleTitle)
                return category;
    
    return '';
}