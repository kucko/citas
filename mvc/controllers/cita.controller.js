const ctrlCitas = {},
    Cita = require('../models/citas'),
    message = require('../config/message')

ctrlCitas.create = async(req, res) => {
    const nuevaCita = new Cita({
        Cita: {
            fecha: req.body.fecha,
            estado: req.body.estado,
            updated: req.body.updated,
        },
        Persona: {
            nombre: req.body.nombre,
            cedula: req.body.cedula,
            correo: req.body.correo,
            celular: req.body.celular
        }
    });
    await nuevaCita.save();
    res.json({ msg: message.success, status: true });
};

ctrlCitas.list = async(req, res) => {
    const citas = await Cita.find();
    res.json(citas);
};
/*
ctrlCitas.enable = async(req, res) => {
    const { _id, status } = req.body
    await User.findOneAndUpdate({ _id: _id }, { status: status })
    res.json({ status: true })
}

ctrlCitas.delete = async(req, res) => {
    console.log(req.params._id);
    const { _id } = req.params;
    const users = await User.deleteOne({ _id: _id });
    res.json({ status: true });
}
*/


module.exports = ctrlCitas