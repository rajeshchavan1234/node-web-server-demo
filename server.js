const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app =express();

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engin','hbs');


app.use((req,res,next)=>{
    var now = new Date().toString();
    var lg = `${now} : ${req.method} : ${req.url}`
    console.log(lg);
    fs.appendFileSync('server.log',lg + '\n');    
    next();
})

// app.use((req,res,next) =>{
//     res.render('maintenance.hbs')
// })

app.use(express.static(__dirname + '/public'));


hbs.registerHelper('getCurrentYear',()=>{
    return new Date().getFullYear()
});


app.get('/',(req,res)=>{
    res.render('home.hbs',{
        pageTitle:'Home  Page',
        welcome:'Welcome to home page'
    });
});

app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        pageTitle:'About Page',
        welcome:'Welcome to about page'
    });
});

app.get('/bad',(req,res)=>{
    res.send({
        errorMessage:'Unable to handle request!!'
    })
});


app.listen(3010),()=>{
    console.log('server is up on 3010!!!');
};

