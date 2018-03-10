const mongoose = require('mongoose');
const http = require('http');
const fs = require('fs');

mongoose.Promise = global.Promise;

const db = mongoose.connect('mongodb://localhost:27017/poetry');

const poemSchema = mongoose.Schema({
    title: String,
    author: String,
    content: [String]
});

const Poem = mongoose.model('songPoetry', poemSchema, 'songPoetry');

http.createServer(function (req, res) {
    const url = req.url;
    if (url === '/')
        fs.readFile('./poetry.html', 'utf-8', function (err, data) {
            if (err)
                throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    else if (url === '/poetry')
        Poem.find({ author: '陆游' }).then(docs => {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(docs));
        }, err => {
            console.log(err);
        });
}).listen(3000, '127.0.0.1');