const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const posts = require('./routes/api/posts');
app.use('/api/posts', posts);

app.get('/', (request, response) => response.send('<h1>hello</h1>'));

app.get('/test', (req, res) => res.send('<h1> test route</h1>'));

//app.get('/test/:num', (req, res) => res.send(`<h1>${req.params.num}</h1>`));

app.get('/test/add/:num', (req, res) => {
    const num = parseInt(req.params.num, 10);
    res.send(`<h1>${5 + num}</h1>`);
});

//query parameter under req.query object
app.get('/test/subtract', (req, res) => {
    const num = parseInt(req.query.num, 10);
    console.log(num);
    res.send(`<h1>${num - 5}</h1>`);
});

app.post('/test/multiply', (req, res) => {
    const num = parseInt(req.body.num, 10);
    res.json({result: num * 5});
})

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`App listening on port ${port}` ));