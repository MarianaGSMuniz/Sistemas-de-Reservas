const res = require('express/lib/response');
const { servicesVersion } = require('typescript');
const funcionario = require('../resources/funcionario');
const cript = require('bcrypt');
const auth = require('../middleware/auth');
const storage = require('localtoken');


//fazer registro do funcionario
exports.getCriar - async(req, res, next) => {
    try {
        return res.send('pagina funcionando');
    } catch (err) {
        next(err);
    }
}
exports.getLogar = async(req, res, next) => {
        try {
            return res.render('login/_index');
        } catch (err) {
            next(err);

        }

        exports.postLogar = async(req, res, next) => {
                try {
                    const resultado = await Funcionario.validarEntrada(req.body);
                    if (!resultado) {
                        return res.send('Usúario não encontrado');
                    }
                    if (!await cript.compare(req.body.senha, resultado.senha)) {
                        return res.send('Senha errada');

                    }
                    const token = await auth.gerarToken({ resultado });
                    storage.setInLocal('login', token);
                    console.log('usuario logado com sucesso');
                    return res.redirect('/');
                } catch (err) {
                    next(err);

                }

                exports.deslogar = (req, res) => {
                    try {
                        await storage.removeLocal('login');
                        return res.json({
                            Success: 'Deslogado com sucesso'
                        })
                    } catch (err) {
                        next(err);
                    }

                }

                exports.postCriar = async(req, res, next) => {
                    try {
                        let resultado = await funcionario.validarRegistro();
                        if (!resultado) {
                            let funcionario = await Funcionario.criar(req, body);
                            return res.json(funcionario);
                        } else {
                            return res.json({
                                error: 'funcionario já cadastrado'
                            })
                        }
                    } catch (err) {
                        next(err);

                    }
                }
                exports.buscarTodos = async(req, res, next) => {
                    try {
                        const todos = await Funcionario.buscarTodos();
                        return res.json(todos);
                    } catch (err) {
                        next(err);
                    }
                }