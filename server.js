const express = require('express');
const app = express();
const studentsRoutes = require('./controllers/studentsController');
const bodyParser = require('body-parser');
const cors = require('cors');
require('./models/dbConfig.js');

//MiddleWare
app.use(bodyParser.json());
app.use(cors())
app.use('/students', studentsRoutes)


// Serve the files on port 8080.
app.listen(8080, () => {
  console.log('Listening on port 8080!\n');
});
