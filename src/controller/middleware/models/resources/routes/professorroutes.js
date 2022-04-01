const Professorroutes = require ('../controller/professor');
const express = require ('express');
const { ModuleResolutionKind } = require('typescript');
const router = express.Router ();

router.get ('/', Professor.getCriar);
router.post ('/' ,Professor.postCriar);

module.exports = router;
