const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const noteRoutes = require('./routes/noteRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/notes', noteRoutes);

module.exports = app;
