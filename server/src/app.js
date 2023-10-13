const express = require('express');
const volleyball = require('volleyball');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();

// import routes, middlewares
const routes = require('./app.routes');
const middlewares = require('./app.middlewares');

// create app instance
const app = express();

// middlewares
app.use(volleyball);
app.use(helmet());
app.use(cors());
app.use(express.json());

// routes
app.get('/', (req, res) => res.json({ message: 'API online!' }));
app.use('/api/faqs', routes.api.faqs);

// errorHandler
app.use(middlewares.errorHandler);

module.exports = app;
