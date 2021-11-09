const mongoose = require("mongoose");
var CitaSchema = new mongoose.Schema({
    fecha: { type: Date },
    estado: { type: String },
    updated_at: { type: Date, default: Date.now() },
    Persona: [{
        nombre: { type: String, require: true, lowercase: true },
        cedula: { type: Number, require: true },
        corrreo: { type: String, require: true },
        celular: { type: Number, require: true }
    }]
})
module.exports = mongoose.model('citas', CitaSchema)