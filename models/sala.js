const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let salaSchema = new Schema({
    name: {
        type: String,
        required: [true, "El nombre debe de ser requerido"]
    },
    description: {
        type: String,
        required: [true, "La descripcion debe de ser requerido"]
    },
    state: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('Sala', salaSchema);