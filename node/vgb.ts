import * as express from 'express';
import * as fs from 'fs';
import * as path from 'path';

import * as marked from 'marked';
import * as highlight from 'highlight.js';

marked.setOptions({
    highlight: code => highlight.highlightAuto(code).value
});

const app = express();
// app.use(express.static('../lib'));
// app.use(express.static('../react'));

interface ArticleResponse {
    title: string;
    html: string;
}

interface CachedMd {
    [index: string]: ArticleResponse;
}

interface CachedIndex {
    [index: string]: string;
}

const INDEX = 'index';
const INDEX_MOBILE = 'index_mobile';

const cachedMd: CachedMd = {};
const cachedIndex: CachedIndex = {};

app.get('/', (req, res) => {
    const userAgent = req.headers['user-agent'] as string;
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

    read(`./md/${title}.md`).then(function(data) {
        const articleResponse: ArticleResponse = { title, html: marked(data.toString()) };
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

function read(path: string): Promise<Buffer> {
    return new Promise(function(resolve, reject) {
        fs.readFile(path, function(err, data) {
            if (err)
                reject(err);
            else
                resolve(data);
        });
    });
}

function isMobile(userAgent: string): boolean {
    return userAgent.toLowerCase().includes('mobile');
}