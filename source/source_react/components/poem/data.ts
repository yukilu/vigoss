export const POETRY_CATEGORIES = ['songPoem', 'songPoetry', 'modern'];

export const POEMTYPE_MAP = { songPoem: '宋词', songPoetry: '宋诗', modern: '现代诗' };

// export const DATA_URL = 'http://127.0.0.1:3000';
export const DATA_URL = 'https://www.vigoss.top';

export interface Poem {
    title: string;
    author: string;
    content: string[];
}