const { servicesVersion } = require('typescript');
const Cliente = require ('../resources/professor');
const professor = require('./middleware/models/resources/professor');

exports.getCriar = async (req, res, next) =>{
try{
    return res.send('redenrizo um form se cadatro de professor');
    } catch (err) { 
        next (err);
        }
}

exports.postCriar = async (req, res, next) =>{
    try{
            let resultado = await professor.validarRegistro (req.body);
            if (!resultado){ 
            await Cliente.criar (req.body);
           return res.json(cliente);
       } else {
           return  res.json (
               {
                   error: 'Professor já agendou!'
                   }
                   );
       }
            catch (err) {
        next(err);

    }
}
exports.buscarTodos = async (req, res, next) =>{
    try{
        const todos = await Cliente.buscarTodos( );
        return res.json (todos);
     }catch (err){
         next (err);
     }
}
