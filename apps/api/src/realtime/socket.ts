import http from 'http';
import { Server } from 'socket.io';
import { env } from '../config/env';

let io: Server;

export const initSocket = (server: http.Server): Server => {
  io = new Server(server, {
    cors: {
      origin: env.socketCorsOrigin,
      methods: ['GET', 'POST']
    }
  });

  io.on('connection', (socket) => {
    socket.emit('platform.connected', { connectedAt: new Date().toISOString() });
  });

  return io;
};

export const getSocket = (): Server => {
  if (!io) {
    throw new Error('Socket not initialized');
  }
  return io;
};
