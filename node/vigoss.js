const express = require('express');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const db = mongoose.connect('mongodb://localhost:27017/poetry');

const schema = mongoose.Schema({
    title: String,
    author: String,
    content: [String]
});

const Poem = mongoose.model('songPoetry', schema, 'songPoetry');
const PoemN = mongoose.model('northernSongPoem', schema, 'northernSongPoem');
const PoemS = mongoose.model('southernSongPoem', schema, 'southernSongPoem');

const app = express();

const poemTypes = { songPoetry: Poem, northernSongPoem: PoemN, southernSongPoem: PoemS };

app.get('/', (req, res) => {
    res.sendFile('/home/node/poetry.html');
});

app.get('/poetry/:poemType/author/:name', (req, res) => {
    const poemType = req.params.poemType;
    const author = req.params.name;
    poemTypes[poemType].find({ author }).then(docs => {
        res.send(JSON.stringify(docs));
    }, err => {
        console.log(err);
    });
});

app.get('/poetry/:poemType', (req, res) => {
    const poemType = req.params.poemType;
    poemTypes[poemType].aggregate({ $group: { _id:'$author', num: { $sum: 1 } } }, { $sort: { num: -1 } }).then(docs => {
        const poets = docs.map(doc => doc._id);
        res.send(JSON.stringify(poets));
    }, err => {
        console.log(err);
    });
})

app.listen(3000, () => {
    console.log('Running.');
});