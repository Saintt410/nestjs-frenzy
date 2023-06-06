import * as winston from 'winston';

const WebLogger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: 'logs/web.log',
      level: 'info',
    }),
  ],
  defaultMeta: { service: 'web-service' },
});

export const WebInfoLogger = (message: string) => WebLogger.info(message);
export const WebErrorLogger = (message: string) => WebLogger.error(message);
export const WebWarnLogger = (message: string) => WebLogger.warn(message);
export const WebDebugLogger = (message: string) => WebLogger.debug(message);

export default WebLogger;
