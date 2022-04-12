const funcionario = require ('../controller/funcionario');
const express = require ('express');
const { route } = require('express/lib/application');
const router = express.Router ( );

router.get(' / ', Funcionario.getCriar);
router.get(' / todos', Funcionario.buscarTodos);
router.get('/ logar', Funcionario.getLogar);
router.post(' / ', Funcionario.postCriar);
router.post ('/logar', Funcionario.postLogar);

module.exports = router;




