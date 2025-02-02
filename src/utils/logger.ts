import { createLogger, transports, format } from 'winston';
import environment from '../configs/environment';
const { combine, printf, timestamp, colorize, json } = format;

const getTransports = (() => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const transportConfig: any[] = [
    new transports.Console({
      format: combine(
        timestamp(),
        colorize(),
        printf(({ level, message }) => `[${level}] : ${message}`)
      ),
    }),
  ];
  if (environment.isProd) {
    transportConfig.push(
      new transports.File({
        filename: './logs/info.log',
        level: 'warn',
        format: combine(timestamp(), json()),
      })
    );
  }
  return transportConfig;
})();

const logger = createLogger({
  level: environment.isDev ? 'debug' : 'warn',
  transports: getTransports,
});

export default logger;
