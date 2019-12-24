import winston = require('winston');
import { format } from 'winston';

const {combine, splat, timestamp, label, prettyPrint, colorize} = format;

const options: winston.LoggerOptions = {
    format: combine(
        timestamp(),
        splat(),
        prettyPrint(),
        colorize({ all: true })
    ),
    transports: [
        new winston.transports.Console({level: process.env.NODE_ENV === 'production' ? 'error' : 'debug'}),
        new winston.transports.File({filename: 'debug.log', level: 'debug'}),
    ],
};

const logger = winston.createLogger(options);

if (process.env.NODE_ENV !== 'production') {
    logger.debug('Logging initialised at the debug level');
}

export default logger;
