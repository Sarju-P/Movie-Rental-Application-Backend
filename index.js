const express = require('express');
const app=express();

const genres = 
[
    { id: 1, name: 'Horror'},
    { id: 2, name: 'Action'},
    { id: 3, name: 'Romantic' }
]
app.get('/', (req,res)=>{
    res.send('WELCOME TO THE HOMEPAGE OF MOVIE RENTAL APPLICATION...');
});

app.get('/genres', (req,res)=>{
    res.send(genres);
});

app.get('/genres/:id',(req,res)=>{
    const genre=genres.find(g=>g.id===parseInt(req.params.id));
    res.send(genre);
});


const port = process.env.PORT || 3000;
//To set port : set PORT=4000

app.listen(port,(req,res)=> {
    console.log(`Listening on port ${port}...`);
})


