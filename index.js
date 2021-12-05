const express = require('express');

const server = express();

server.use(express.json());

const modulos = [ 'Fundamentos', 'Front-end', 'Back-end' ];

//  Retorna um modulo
server.get('/modulos/:index', (req, res) => {
  const { index } = req.params;

  return res.json(modulos[index]);
});

// Retornar todos os modulos
server.get('/modulos', (req, res) => {
  return res.json(modulos);
});

// Criar um novo modulo
server.post('/modulos', (req, res) => {
  const { name } = req.body;
  modulos.push(name);

  return res.json(modulos);
});

//  Atualizar um modulo
server.put('/modulos/:index', (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  modulos[index] = name;

  return res.json(modulos);
});


//  Deletar um modulo
server.delete('/modulos/:index', (req, res) => {
  const { index } = req.params;
  
  modulos.splice(index, 1);
  return res.json({ message: "O modulo foi deletado" });
});

server.listen(3000);