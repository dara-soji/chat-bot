const { format, createLogger, transports } = require('winston');
const { timestamp, combine, printf, errors, json } = format

const buildProdLogger = () => {

  return createLogger({
    level: 'debug',
    format: combine(
      timestamp(), 
      errors({stack: true}),
      json(),
      ),
    defaultMeta: { service: 'user-service' },
    transports: [
  
      new transports.Console()
    ],
  });
  
}

module.exports = buildProdLogger;