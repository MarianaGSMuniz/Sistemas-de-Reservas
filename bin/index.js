const res = require("express/lib/response");
const { app } = require("express/lib/response");
const { ModuleResolutionKind } = require("typescript");

//configurando o parser
app.user (bp.json({limit: '10mb'}));
app.user (bp.urLencoded({extendend: false}));

//configurando o front
app.set ('viwe engine', 'ejs');
app.set ('views', 'views');

//definindo arquivos estaticos
app.use (express.static ('public'));
const professor_route = require ('../src/routes/professor ');

//chamando rotas default
app.user ('/', (req, res) =>{
    return res.render ('login');
    
})


//chamando rotas
app.use ('/' ,(req, res) =>{
        return res.render ('login');

});

//exportando aplicação
Module.exports = app;


