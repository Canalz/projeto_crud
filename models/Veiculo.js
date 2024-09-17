const mongoose = require('mongoose');

const veiculoSchema = new mongoose.Schema({
  modelo: String,
  anoFabricacao: Number,
  placa: String,
  acessorios: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Acessorio' }]
});

module.exports = mongoose.model('Veiculo', veiculoSchema);