const express = require('express');
const rotas = require('./routes');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.json());
app.use('/api', rotas);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor hospedado na porta: ${PORT}`));