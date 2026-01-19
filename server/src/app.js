import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import db_connect from './utils/db_connect.js';


const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
// console.log("hello");

// app.use('/api', routes);
db_connect.MONGO_DB()
// global error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || 'Internal error' });
});

export default app;
