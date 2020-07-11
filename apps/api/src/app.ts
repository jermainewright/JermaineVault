import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import authRoutes from './modules/auth/auth.routes';
import metricsRoutes from './modules/metrics/metrics.routes';
import teamsRoutes from './modules/teams/teams.routes';
import { errorHandler } from './middleware/errorHandler';

export const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'jermainevault-api' });
});

app.use('/api/auth', authRoutes);
app.use('/api/metrics', metricsRoutes);
app.use('/api/teams', teamsRoutes);

app.use(errorHandler);
