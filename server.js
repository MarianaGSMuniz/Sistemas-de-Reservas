const { isConstructorDeclaration } = require('typescript');
const app = require ('./bin/index');
const keys = require ('./bin/keys');
const connection = require ('./src/middleware/connection');

app.listen (keys.server.port,  ( ) => {
    connection.connect( );
    if(err){
        console.log ('==> [-]Erro na Aplicação');
    } else   console.log ('==> [+] Funcionando');
  
});