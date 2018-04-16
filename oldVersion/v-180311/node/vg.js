const express = require('express');
const sqlite3 = require('sqlite3');

const app = express();
const db = new sqlite3.Database('poetry.db');

const poemTypes = { cyjc: 'cyjc', modern: 'modern', southernSongPoem: 'songpoem',
    northernSongPoem: 'songpoem', songPoetry: 'songpoetry' };
const poetList = {};

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
        const poetMap = {};
        const poets = poetList[poemType];
        for (let row of rows) {
            const author = row.AUTHOR;
            if (poetMap[author] === undefined)
                poetMap[author] = 0;
            else
                ++poetMap[author];
        }

        const poetMapArray = [];
        for (let k in poetMap) {
            poetMapArray.push({ author: k, count: poetMap[k] });
        }
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
    // console.log(author, poetList[poemType]);
    // console.log(author in poetList[poemType]);
    if (!poemType || !find(author, poetList[poemType])) {
        res.send('[]');
        return;
    }
    
    const poems = [];
    readRows(`SELECT * from ${poemType} where author='${author}'`).then(function (rows) {
        // console.log(rows);
        for (let row of rows)
            poems.push({ title: row.TITLE, author: row.AUTHOR, content: row.CONTENT.split('\n') });
        res.send(JSON.stringify(poems));
    }, err => {
        res.send('[]');
        console.log(err);
    });
});

app.listen(3000, () => console.log('Running...'));

function readRows(query) {
    return new Promise(function (resolve, reject) {
        db.all(query, function(err, rows) {
            if (err)
                reject(err);
            else
                resolve(rows);
        });
    });
}

function find(item, array) {
    for (let itm of array) {
        if (item == itm)
            return true;
    }
    return false;
}