const Cliente = require ('../resources/professor');

exports.getCriar = async (req, res, next) =>{
try{
    return res.send('redenrizo um form se cadatro de professor');
    } catch (err) { 
        next (err);
        }
}

exports.postCriar = async (req, res, next) =>{
    try{
            const professor = await professor.Criar(req.body);
            return res.json(cliente);
    } catch (err) {
        next(err);

    }
}
