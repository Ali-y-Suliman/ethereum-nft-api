import express from 'express';
import helmet from 'helmet';
import routes from './routes';
import { errorHandler } from './utils/errorHandler';
import { apiLimiter } from './middlewares/rateLimiter';

const app = express();

app.use(helmet());
app.use(express.json());
app.use(apiLimiter);

app.use('/api', routes);

app.use(errorHandler);

app.use((req, res) => {
  res.status(404).json({ status: 'error', message: 'Not Found' });
});

export default app;
