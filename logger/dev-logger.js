const { format, createLogger, transports, addColors } = require('winston');
const { timestamp, combine, printf, errors } = format


const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4
};

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'orange'
};

addColors(colors);

const buildDevLogger = () => {

  const logFormat = printf(({level, message, timestamp, stack}) => {
    return `${timestamp} ${level}: ${stack || message}`
  })
  
  return createLogger({
    level: 'debug',
    levels,
    format: combine(
      format.colorize(), 
      timestamp({format: 'YYYY-MM-DD HH:mm:ss'}), 
      errors({stack: true}),
      logFormat,
      ),
    defaultMeta: { service: 'user-service-dev' },
    transports: [
      new transports.Console(),
      new transports.File({
        filename: 'logs/errors.log',
        level: 'error',
    }),
    new transports.File({
        filename: 'logs/combined.log'
    })
    ],
  });
  
}

module.exports = buildDevLogger;