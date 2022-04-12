const express = require ('express');
const bp = require ('body-parser');

const app = express ();
// verificar essas funções
//const res = require("express/lib/response"); 
//const { app } = require("express/lib/response"); 
//const { ModuleResolutionKind } = require("typescript"); 

//configurando o parser
app.user (bp.json({limit: '10mb'}));
app.user (bp.urlencoded({extendend: false}));

//configurando o front
app.set ('viwe engine', 'ejs');
app.set ('views', 'views');

//definindo arquivos estaticos
app.use (express.static ('public') );

const professor_route = require ('../src/routes/professor ');
const funcionario_route=require ('../src/routes/funcionario');

app.use (' /  professor', professor_route);
app.use ('/ funcionario', funcionario_route);


//chamando rotas default
app.use ('/' ,(req, res) =>{
        return res.send (' Bem Vindo');

});

//exportando aplicação
Module.exports = app;


