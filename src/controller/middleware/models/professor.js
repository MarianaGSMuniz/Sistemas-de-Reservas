const smc = require('simple-mongoose-creator');
smc.smc('professor', {
    nome:{
        type : String,
        required: true,
        trim: trim
    }
    ,numdasala :{
        type: String,
        requeired: true
    }
});
module.exports = smc;

