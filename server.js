import express from 'express';
import logger from 'morgan';

const routes = require('./routes');

require('dotenv').config();


const app = express();
const { PORT } = process.env;

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


routes(app);
app.get('/', (req, res) => {
  res.send('Hello Quotes server');
});

app.listen(PORT);
