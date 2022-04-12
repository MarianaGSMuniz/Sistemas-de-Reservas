const storage = require ('localtoken');
const jwt = require ('jsonwebtoken');

exports.autorizar = async (req, res, next) =>{
    try{
        const resultado = await storage.getInLocal('login')
        if (!resultado) {
            return res.send ('Permissão negada');
        }
    }catch (error){
        next (err);
    }
}