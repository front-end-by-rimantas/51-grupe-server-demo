import express from 'express';

const app = express();
const port = 5114;

app.get('/', (req, res) => {
    return res.send('Home page');
});

app.get('/login', (req, res) => {
    return res.send('Login page');
});

app.get('/register', (req, res) => {
    return res.send('Register page');
});

app.get('/secret', (req, res) => {
    return res.status(401).send('Secret page');
});

app.get('*', (req, res) => {
    return res.send('404 - page not found');
});

app.use((req, res, next) => {
    return res.status(404).send("Sorry can't find that!");
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    return res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log(`Serveris sukasi ant http://localhost:${port}`);
});