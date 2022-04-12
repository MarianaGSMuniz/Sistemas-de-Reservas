require('.../models/resources/funcionario');

const mongoose = require ('mongoose');
const modelo = mongoose.model ('funcionarios');

const cript = require ('bycript');
const salt = 10;


//metodo crud
class funcionario {
        static async criar (dados) {
            let{ senha } = dados;
            const hash = await cript.has(senha, salt);
            senha= hash;
            dados.senha = senha;
            
                return await new modelo (dados).save();
            }
            
            static async autenticar (){
                const { matricula } = dados;
                const funcionario = await modelo.findOne({matricula});
            return funcionario;
             }

            static async buscarTodos ( ){
                return await modelo.find( { });

            }

            static async buscarPorID ( id, ){
                return await modelo.findOne ( { _id: id});

            }
            static async atualizar (id, dados){
                return await modelo.findOneAndUpdateid( id, {$set: dados});
            }
            static async deletar (id){
                return await modelo.findByIdAndRemove(id);
            }
}

module.exports = professor;