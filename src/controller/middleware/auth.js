const storage = require ('localtoken');
const jwt = require ('jsonwebtoken');
const keys = require ('../../bin/keys');

exports.autorizar = async (req, res, next) =>{
    try{
        const resultado = await storage.getInLocal('login')
        if (!resultado) {
            return res.send ('Permissão negada');
        }
        return next();
    }catch (error){
        next (err);
    }
}
exports.gerarToken= async ( dados ) =>{
    return await jwt.sign(dados, Keys.auth.secret);

}
exports.decodificar = async (toke) => {
    const dados = await jwt.decode(token.auth.secret);
    return dados; 

}