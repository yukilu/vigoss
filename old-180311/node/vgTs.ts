import * as express from 'express';
import { Database } from 'sqlite3';

interface PoemTypes { [index: string]: string; }
interface PoetList { [index: string]: string[]; }
interface PoetMap { [index: string]: number; }
interface PoetCount {
    author: string;
    count: number;
}
interface Poem {
    title: string;
    author: string;
    content: string[];
}

const app = express();
const db = new Database('poetry.db');

const poemTypes: PoemTypes = { cyjc: 'cyjc', modern: 'modern', southernSongPoem: 'songpoem',
    northernSongPoem: 'songpoem', songPoetry: 'songpoetry' };
const poetList = <PoetList>{};

app.get('/poetry/:poemType', function (req, res) {
    let poemType = req.params.poemType;
    poemType = poemTypes[poemType];
    if (!poemType) {
        res.send('[]');
        return;
    }

    let poets = poetList[poemType];
    if (poets) {
        res.send(JSON.stringify(poets));
        return;
    }

    readRows(`SELECT author from ${poemType}`).then(function (rows) {
        poetList[poemType] = [];
        const poetMap = <PoetMap>{};
        const poets = poetList[poemType];
        for (let row of rows) {
            const author = row.AUTHOR;
            if (poetMap[author] === undefined)
                poetMap[author] = 0;
            else
                ++poetMap[author];
        }

        const poetMapArray = <PoetCount[]>[];
        for (let k in poetMap)
            poetMapArray.push({ author: k, count: poetMap[k] });
        poetMapArray.sort((p1, p2) => p2.count - p1.count);
        for (let p of poetMapArray)
            poets.push(p.author);
        res.send(JSON.stringify(poets));
    }, err => {
        res.send('[]');
        console.log(err);
    });
});

app.get('/poetry/:poemType/author/:author', function (req, res) {
    let poemType = req.params.poemType;
    let author = req.params.author;
    poemType = poemTypes[poemType];

    if (!poemType || !find(author, poetList[poemType])) {
        res.send('[]');
        return;
    }

    const poems = <Poem[]>[];
    readRows(`SELECT * from ${poemType} where author='${author}'`).then(function (rows) {
        for (let row of rows)
            poems.push({ title: row.TITLE, author: row.AUTHOR, content: row.CONTENT.split('\n') });
        res.send(JSON.stringify(poems));
    }, err => {
        res.send('[]');
        console.log(err);
    });
});

app.listen(3000, () => console.log('Running...'));

function readRows(query: string) {
    return new Promise(function (resolve, reject) {
        db.all(query, function (err, rows) {
            if (err)
                reject(err);
            else
                resolve(rows);
        });
    });
}

function find<T>(item: T, array: T[]): boolean {
    for (let itm of array)
        if (item = itm)
            return true;
    
    return false;
}