const Professorroutes = require ('../controller/professor');
import modulo from 'express';
const { ModuleResolutionKind } = require('typescript');
const router = express.Router ();

router.get ('/', Professor.getCriar);
router.post ('/' , Professor.postCriar);

module.exports = router;
