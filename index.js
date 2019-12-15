const express = require('express');
const app=express();

const genres = 
[
    { id: 1, name: 'Action'},
    { id: 2, name: 'Horror'},
    { id: 3, name: 'Romantic' }
]
app.get('/', (req,res)=>{
    res.send(genres);
});

app.listen(4000,(req,res)=> {
    console.log('Listening on port 4000...');
})


