const Professor = require ('../resources/professor');

exports.getCriar - asnyc (req,  res,  next)  => {
    try {
        return res.send('oi aqui resendizo o cadastro do professor');
    } catch (err) { 
        next (err);

      }
}
exports.postCriar - async (req,  res,  next)  => {
    try{
            await Cliente.criar (req.body);
            return res.json (professor);
     } catch (err) {
         next (err);

    }
}
exports.buscarTodos = async (req, res, next) => {
    try{
        const todos = await  Cliente.buscarTodos ();
        return res.json (todos);
    } catch (err) {
        next (err);

    }
}