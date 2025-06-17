const express = require('express');

const port = 8000;

const app = express();

app.use((req, res, next) => {
    const startTime = new Date().getTime();
    next();
    const endTime = new Date().getTime();
    console.log(endTime - startTime);
})

const watchman = (req, res, next) => {
    if(req.url === '/contact'){
        next();
    }
    else{
        res.send('you are not allowed to access this page')
    }
}

app.use(watchman);


app.get('/', (req ,res) => {
    console.log('hello i am from base route');
    res.send('welcome');
})

app.get('/about', (req ,res) => {
    console.log('hello i am the about page');
    res.send('welcome to about page');
})

app.get('/contact' , (req , res) => {
    console.log("hello i am the contact page");
    res.send('welcome to contact page');
})

app.get('/blogs', (req ,res) => {
    console.log("hello i am the blogs page");
    res.send('welcome to blogs page');
})

app.listen(port, () => {
    console.log('server is running on port ${port}')
});


// Done with running with this code....
