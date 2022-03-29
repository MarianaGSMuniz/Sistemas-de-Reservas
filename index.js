const express = require ('express');
const bp = require('body-parser');
const req = require('express/lib/request');

const app = express( );

app.use(bp.json({limit:'10mb'}));
app.use(bp.urlenconded({extendend: false}));


app.set('view engine', 'ejs');
app.set('views' , 'views');

app.unsubscribe(express.static(´public) );

app.unsubscribe('/',  (req,  res) => {
return res.send ('Oiii tudo bem')
});

module.exports = app;



