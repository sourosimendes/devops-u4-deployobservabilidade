const express = require("express");

const app = express();

const porta = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        mensagem: "API DevOps funcionando corretamente"
    });
});

app.get("/usuarios", (req, res) => {
    res.json([
        {
            id: 1,
            nome: "João"
        },
        {
            id: 2,
            nome: "Maria"
        }
    ]);
});

app.get("/saude", (req, res) => {
    res.json({
        status: "online"
    });
});

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`);
});

module.exports = app;
