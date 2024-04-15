const express = require('express');
const axios = require('axios');

const app = express();
const port = 9000;
const apiUrl = 'https://api-gaia.azurewebsites.net'; // URL da API existente

// Middleware para analisar corpos JSON
app.use(express.json());

// Rota para contar XP
app.get('/xp/count', async (req, res) => {
    try {
        const response = await axios.get(`${apiUrl}/api/post/count/xp`);
        res.json(response.data);
    } catch (error) {
        console.error('Erro ao contar XP:', error);
        res.status(500).json({ error: 'Falha ao contar XP' });
    }
});

// Rota para criar XP
app.post('/xp', async (req, res) => {
    try {
        const response = await axios.post(`${apiUrl}/api/user/xp`, req.body);
        res.json(response.data);
    } catch (error) {
        console.error('Erro ao criar XP:', error);
        res.status(500).json({ error: 'Falha ao criar XP' });
    }
});

// Rota para obter URL assinada para imagem XP
app.get('/xp/url/:email', async (req, res) => {
    const { email } = req.params;
    try {
        const response = await axios.get(`${apiUrl}api/post/xp/url/${email}`);
        res.json(response.data);
    } catch (error) {
        console.error('Erro ao obter URL assinada:', error);
        res.status(500).json({ error: 'Falha ao obter URL assinada' });
    }
});

// Rota para criar post XP
app.post('/xp/post', async (req, res) => {
    try {
        const response = await axios.post(`${apiUrl}/api/post/xp/post`, req.body);
        res.json(response.data);
    } catch (error) {
        console.error('Erro ao criar post XP:', error);
        res.status(500).json({ error: 'Falha ao criar post XP' });
    }
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`);
});
