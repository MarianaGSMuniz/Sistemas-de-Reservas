const funcionario = require ('../controller/funcionario');
const express = require ('express');
const { route } = require('express/lib/application');
const router = express.Router ( );

router.get(' / ', Funcionario.getCriar);
router.get(' / todos', Funcionario.buscarTodos);

router.post(' / ', Funcionario.postCriar);




