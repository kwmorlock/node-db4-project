const express = require('express');

const RecipesRouter = require('./recipes/recipes-router.js');

const server = express();

server.use(express.json());
server.use('/api/recipes', RecipesRouter);
//line 9 is starting point for site to use in postman

module.exports = server;