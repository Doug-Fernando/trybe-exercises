const express = require('express');

const app = express();
const PORT = process.env.PORT || 3333; 
app.use(express.json());

app.get('/', (_req, res) => { 
  res.send('Yo');
});

app.listen(PORT);
