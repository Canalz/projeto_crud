const express = require('express');
const mongoose = require('mongoose');
const acessoriosRoutes = require('./routes/acessorios');

const app = express();

// Assuming your database name is 'myDatabase'
mongoose.connect('mongodb://localhost:27017/local/myDatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Conectado ao banco de dados'))
.catch(error => console.log(error));

app.use(express.json());

app.use('/acessorios', acessoriosRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});