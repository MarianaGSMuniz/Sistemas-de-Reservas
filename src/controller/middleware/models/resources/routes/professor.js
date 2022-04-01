const Professor = require ('../resources/professor');

exports.getCriar - asnyc (req,  res,  next) => {
    try {
        return res.send('oi aqui resendizo o cadastro do professor');
    } catch (err) { 
        next (err);

      }
}
exports.postCriar - async (req,  res,  next) =>{
    try{
            await Cliente.criar (req.body);
            return res.json (professor);
     } catch (err) {

    }
}