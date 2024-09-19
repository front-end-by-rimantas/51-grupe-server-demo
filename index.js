import express from 'express';

const app = express();
const port = 5114;

app.get('/', (req, res) => {
    return res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <header>
        <nav>
            <a href="/">Home</a>
            <a href="/services">Services</a>
            <a href="/login">Login</a>
            <a href="/register">Register</a>
            <a href="/contact-us">Contact us</a>
        </nav>
    </header>
    <main>
        <h1>Home page</h1>
    </main>
</body>
</html>`);
});

app.get('/contact-us', (req, res) => {
    return res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <header>
        <nav>
            <a href="/">Home</a>
            <a href="/services">Services</a>
            <a href="/login">Login</a>
            <a href="/register">Register</a>
            <a href="/contact-us">Contact us</a>
        </nav>
    </header>
    <main>
        <h1>Contact us page</h1>
        <p>Dabar bulviakasis - netrukdyk 👀</p>
    </main>
</body>
</html>`);
});

app.get('/services', (req, res) => {
    return res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <header>
        <nav>
            <a href="/">Home</a>
            <a href="/services">Services</a>
            <a href="/login">Login</a>
            <a href="/register">Register</a>
            <a href="/contact-us">Contact us</a>
        </nav>
    </header>
    <main>
        <h1>Services page</h1>
        <nav>
            <a href="/services/html">HTML</a>
            <a href="/services/css">CSS</a>
            <a href="/services/js">JS</a>
            <a href="/services/git">GIT</a>
        </nav>
    </main>
</body>
</html>`);
});

app.get('/services/:name', (req, res) => {
    const services = {
        html: 'HTML yra cool',
        css: 'CSS yra grazu',
        js: 'JS tiesiog yra',
        git: 'Git it',
    };

    if (services[req.params.name]) {
        return res.send(`<!DOCTYPE html>
                        <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>Document</title>
                        </head>
                        <body>
                            <header>
                                <nav>
                                    <a href="/">Home</a>
                                    <a href="/services">Services</a>
                                    <a href="/login">Login</a>
                                    <a href="/register">Register</a>
                                    <a href="/contact-us">Contact us</a>
                                </nav>
                            </header>
                            <main>
                                <h1>${req.params.name} page</h1>
                                <p>${services[req.params.name]}</p>
                            </main>
                        </body>
                        </html>`);
    } else {
        return res.send(`Paslauga "${req.params.name}" nera teikiama`);
    }
});

app.get('/login', (req, res) => {
    return res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <header>
        <nav>
            <a href="/">Home</a>
            <a href="/services">Services</a>
            <a href="/login">Login</a>
            <a href="/register">Register</a>
            <a href="/contact-us">Contact us</a>
        </nav>
    </header>
    <main>
        <h1>Login page</h1>
    </main>
</body>
</html>`);
});

app.get('/register', (req, res) => {
    return res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <header>
        <nav>
            <a href="/">Home</a>
            <a href="/services">Services</a>
            <a href="/login">Login</a>
            <a href="/register">Register</a>
            <a href="/contact-us">Contact us</a>
        </nav>
    </header>
    <main>
        <h1>Register page</h1>
    </main>
</body>
</html>`);
});

app.get('/secret', (req, res) => {
    return res.status(401).send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <header>
        <nav>
            <a href="/">Home</a>
            <a href="/services">Services</a>
            <a href="/login">Login</a>
            <a href="/register">Register</a>
            <a href="/contact-us">Contact us</a>
        </nav>
    </header>
    <main>
        <h1>Secret page</h1>
    </main>
</body>
</html>`);
});

app.get('*', (req, res) => {
    return res.status(404).send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <header>
        <nav>
            <a href="/">Home</a>
            <a href="/services">Services</a>
            <a href="/login">Login</a>
            <a href="/register">Register</a>
            <a href="/contact-us">Contact us</a>
        </nav>
    </header>
    <main>
        <h1>404</h1>
        <p>Page not found</p>
    </main>
</body>
</html>`);
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