import * as express from 'express';
import * as fs from 'fs';
import * as path from 'path';

import * as marked from 'marked';
import * as highlight from 'highlight.js';

// const files = fs.readdirSync(__dirname);
// const mdFiles = files.filter(file => file.endsWith('.md'));
// const mdLists = mdFiles.map(md => path.basename(md, '.md'));

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

interface CachedHTML {
    [index: string]: string;
}

const cachedHTML: CachedHTML = {};

// app.get('/', (req, res) => {
//     res.sendFile('D:\\Code\\engineer\\react\\reactNode.html');
// });

app.get('/md/:title', function (req, res) {
    const title = req.params.title;
    let cachedResponseStr = cachedHTML[title];
    if (cachedResponseStr) {
        res.send(cachedResponseStr);
        return;
    }

    read(`./md/${title}.md`).then(function(result) {
        const articleResponse: ArticleResponse = { title, html: marked(result) };
        const articleResponseStr = JSON.stringify(articleResponse);
        cachedHTML[title] = articleResponseStr;
        res.send(articleResponseStr);
    }, err => {
        console.log(err);
        res.send(JSON.stringify({ title, html: '' }));
    });
});

// app.get('/mdLists', (req, res) => {
//     res.send(JSON.stringify(mdLists));
// });

app.listen(3000, () => console.log('Running at port 3000'));

function read(path: string): Promise<string> {
    return new Promise(function(resolve, reject) {
        fs.readFile(path, function(err, data) {
            if (err)
                reject(err);
            else
                resolve(data.toString());
        });
    });
}