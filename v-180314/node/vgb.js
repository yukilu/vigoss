"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const fs = require("fs");
const marked = require("marked");
const highlight = require("highlight.js");
marked.setOptions({
    highlight: code => highlight.highlightAuto(code).value
});
const app = express();
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
// app.get('/mdLists', (req, res) => {
//     res.send(JSON.stringify(mdLists));
// });
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
