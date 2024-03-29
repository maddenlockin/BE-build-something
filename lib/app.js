const express = require('express');
const notFoundMiddleware = require('./middleware/not-found.js');
const errorMiddleware = require('./middleware/error.js');
const materialsController = require('./controllers/materials.js');
const app = express();

app.use(express.json());

app.use('/api/v1/clothing-inventory', materialsController);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

module.exports = app;
