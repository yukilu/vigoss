"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const sqlite3 = require("sqlite3");
const fs = require("fs");
const marked = require("marked");
const highlight = require("highlight.js");
marked.setOptions({
    highlight: code => highlight.highlightAuto(code).value
});
const app = express();
app.use(express.static('../lib'));
app.use(express.static('../react'));
const db = new sqlite3.Database('poetry.db');
const poemTypes = ['modern', 'songPoem', 'songPoetry'];
let poetsList = {};
getPoetsList(poetsList);
const cachedPoetry = { modern: {}, songPoem: {}, songPoetry: {} };
const INDEX = 'index';
const INDEX_MOBILE = 'index_mobile';
const cachedMd = {};
const cachedIndex = {};
app.get('/', (req, res) => {
    const userAgent = req.headers['user-agent'];
    // console.log(userAgent);
    const index = isMobile(userAgent) ? INDEX_MOBILE : INDEX;
    const indexHTML = cachedIndex[index];
    if (indexHTML)
        res.send(indexHTML);
    else
        read(`/home/node/${index}.html`).then(data => {
            const indexHTML = data.toString();
            cachedIndex[index] = indexHTML;
            res.send(indexHTML);
        }, err => console.log(err));
});
app.get('/md/:title', function (req, res) {
    const title = req.params.title;
    let cachedResponse = cachedMd[title];
    if (cachedResponse) {
        res.json(cachedResponse);
        return;
    }
    read(`./md/${title}.md`).then(function (data) {
        const articleResponse = { title, html: marked(data.toString()) };
        cachedMd[title] = articleResponse;
        res.json(articleResponse);
    }, err => {
        // console.log(err);
        res.json({ title, html: '' });
    });
});
app.get('/poets', (req, res) => {
    res.json(poetsList);
});
app.get('/poemType/:poemType/author/:author', function (req, res) {
    let poemType = req.params.poemType;
    let author = req.params.author;
    // console.log(poemType, author);
    if (!poemTypes.includes(poemType) || !poetsList[poemType].includes(author)) {
        res.json([]);
        return;
    }
    let poems = cachedPoetry[poemType][author];
    if (poems) {
        res.json(poems);
        return;
    }
    poems = [];
    readRows(`SELECT * from ${poemType} where author='${author}'`).then(function (rows) {
        for (let row of rows)
            poems.push({ title: row.TITLE, author: row.AUTHOR, content: row.CONTENT.split('\n') });
        cachedPoetry[poemType][author] = poems;
        res.json(poems);
    }, err => {
        res.json([]);
    });
});
app.listen(3000, () => console.log('Running at port 3000'));
function read(path) {
    return new Promise(function (resolve, reject) {
        fs.readFile(path, function (err, data) {
            if (err)
                reject(err);
            else
                resolve(data);
        });
    });
}
function isMobile(userAgent) {
    return userAgent.toLowerCase().includes('mobile');
}
function getPoetsList(poetsList) {
    for (let poemType of poemTypes)
        readRows(`SELECT author from ${poemType}`).then(function (rows) {
            poetsList[poemType] = [];
            const poetMap = {};
            const poets = poetsList[poemType];
            for (let row of rows) {
                const author = row.AUTHOR;
                if (poetMap[author] === undefined)
                    poetMap[author] = 0;
                else
                    ++poetMap[author];
            }
            const poetMapArray = [];
            for (let k in poetMap)
                poetMapArray.push({ author: k, count: poetMap[k] });
            poetMapArray.sort((p1, p2) => p2.count - p1.count);
            for (let p of poetMapArray)
                poets.push(p.author);
        }, err => console.log(err));
}
function readRows(query) {
    return new Promise((resolve, reject) => {
        db.all(query, (err, rows) => {
            if (err)
                reject(err);
            else
                resolve(rows);
        });
    });
}
