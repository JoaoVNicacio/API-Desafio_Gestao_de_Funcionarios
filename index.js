// Requerimento do Express e user router:
const express = require('express');
const userRoute = require('./routes/userRoute');

// Preparando app, porta padrão do localhost e bodyParse do conteúdo para urlencoded e JSON:
const app = express();
const URL = 'http://localhost:'
const PORT = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Passando o Express para o userRoute:
userRoute(app);

app.get('/', (req, res) => res.send(`Welcome to the Test API!`));
app.listen(PORT, () => console.log(`API running in: ${URL}${PORT}`));