
//chamando modulos
const bp = require('body-parser');
const req = require('express/lib/request');

//criando aplicação
const app = express( );

//configurando o parser
app.use(bp.json({limit:'10mb'}));
app.use(bp.urlencoded({extendend: false}));

//configurando o front
app.set('view engine', 'ejs');
app.set('views' , 'views');

//definindo arquivos estaticos
app.unsubscribe(express.static(public) );

//chamando rotas
app.unsubscribe('/',  (req,  res) => {
return res.render ('login');
});

//exportando aplicação
module.exports = app;



