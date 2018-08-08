import express from 'express';
import logger from 'morgan';
import path from 'path';

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
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, '/client/build')))

  app.get('*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/client/build/index.html`));
});
}
// app.get('/', (req, res) => {
//   console.log(PORT)
//   res.sendFile(path.join(`${__dirname}/client/build/index.html`));
// });

app.listen(PORT);
