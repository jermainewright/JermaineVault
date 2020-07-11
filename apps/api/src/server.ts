import http from 'http';
import { app } from './app';
import { env } from './config/env';
import { initSocket } from './realtime/socket';
import { logger } from './utils/logger';

const server = http.createServer(app);
initSocket(server);

server.listen(env.port, () => {
  logger.info('API started', { port: env.port, env: env.nodeEnv });
});
