const express = require('express');
const path = require('path');

const app = express();

const CONFIG = {
  STATICS_PATH: '/../../build',
  PORT: 3004,
};

app.use(express.static(path.join(__dirname, CONFIG.STATICS_PATH)));

app.listen(CONFIG.PORT, () => console.log(`Server app listening on port: ${CONFIG.PORT}!`));
