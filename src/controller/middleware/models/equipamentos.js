const mongoose = require ('mongoose');
const schema = mongoose.Schema;

const equipamentos = new schema ({
professor:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'professor',
    require: true
},
funcionário: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'professor',
    required: true
},
equipamento: {
    type: String,
    required: true,
    trim: true,
    }
});

module.exports = mongoose.model('equipamentos',  equipamento );