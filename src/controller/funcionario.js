const res = require('express/lib/response');
const { servicesVersion } = require('typescript');
const funcionario = require ('../resources/funcionario');

//fazer registro do funcionario
exports.getCriar - async (req, res, next) => {
    try {
        return res.send ('pagina funcionando');
        } catch (err){
            next(err);
        }
}

exports.postCriar = async (req, res, next) =>{
    try{
           let resultado = await funcionario.validarRegistro( );
           if (!resultado){
               let funcionario = await Funcionario.criar (req, body);
               return res.json (funcionario);
           } else {
               return res.json ( {
                   error: 'funcionario já cadastrado'
               })
           }
       }  catch (err) {
        next(err);

    }
}
exports.buscarTodos = async (req, res, next) =>{
    try{
        const todos = await Funcionario.buscarTodos( );
        return res.json (todos);
     }catch (err){
         next (err);
     }
}
