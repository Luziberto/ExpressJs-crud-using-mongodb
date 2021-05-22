const express = require('express');
const cors = require('cors');
const requireDir = require('require-dir');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
app.use(cors());

//iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (err)
     console.error(err);
  else
     console.log("Connected to the mongodb"); 
});

requireDir('./src/models');

//primeira rota
app.use('/api', require('./src/routes'));

app.listen(3001);