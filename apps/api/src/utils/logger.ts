export const logger = {
  info: (message: string, meta: Record<string, unknown> = {}): void => {
    // eslint-disable-next-line no-console
    console.log(JSON.stringify({ level: 'info', message, ...meta, ts: new Date().toISOString() }));
  },
  error: (message: string, meta: Record<string, unknown> = {}): void => {
    // eslint-disable-next-line no-console
    console.error(JSON.stringify({ level: 'error', message, ...meta, ts: new Date().toISOString() }));
  }
};
