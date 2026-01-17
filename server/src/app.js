import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import routes from './routes.js';

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/api', routes);

// global error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || 'Internal error' });
});

export default app;
