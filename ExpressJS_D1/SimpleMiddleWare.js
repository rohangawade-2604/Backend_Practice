const express = require('express')

const port = 8000;

const app = express();

app.use((req, res, next) => {
    console.log('hello i am the middleware ')
    next();
    console.log('hello nextMiddleware is Here..!!!');
})

app.use((req, res, next) => {

    let auth = true;
    if (!auth) {
        res.send('you are not authorized with this')
    }
    else {
        next();
    }

})



app.get('/', (req, res) => {
    console.log('hello i am the welcome page');
    res.send('welcome')
})

app.get('/about', (req, res) => {
    console.log("welcome to about page")
    res.send('about')
})

app.get('/portfolio', (req, res) => {
    console.log("welcome to portfolio page")
    res.send('portfolio')
})

app.get('/contact', (req, res) => {
    console.log('welcome to contact page');
    res.send('contact')
})

app.listen(port, () => {
    console.log("port is active at this point ${port}");
})