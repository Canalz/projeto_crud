const Acessorio = require('../models/Acessorio');


exports.create = async (req, res) => {
    try {
        const novoAcessorio = new Acessorio(req.body);
        await novoAcessorio.save();
        res.status(201).json(novoAcessorio);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

