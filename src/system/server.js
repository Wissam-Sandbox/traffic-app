const express = require('express');
const path = require('path');

const app = express();

const CONFIG = {
  STATICS_PATH: '/../../build',
  PORT: 3004,
};

app.use(express.static(path.join(__dirname, CONFIG.STATICS_PATH)));

app.get('/search', function(req, res){
  res.sendfile(path, {root: './build/'});
});

app.listen(CONFIG.PORT, () => console.log(`Server app listening on port: ${CONFIG.PORT}!`));
