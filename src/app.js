const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const noteRoutes = require('./routes/noteRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api', noteRoutes); // routes for notes
app.use('/api', authRoutes); // routes for auth

module.exports = app;
