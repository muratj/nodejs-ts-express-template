import { format, transports, createLogger } from 'winston';

const logFormat = format.printf(
	({ level, message, label, timestamp, stack }) => {
		return `${timestamp} [${label}] ${level}: ${stack || message}`;
	}
);

const loggerOptions = {
	dev: {
		format: format.combine(
			format.label({ label: process.env.npm_package_name }),
			format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
			format.colorize(),
			format.errors({ stack: true }),
			logFormat
		),
		transports: [new transports.Console()],
	},
	prod: {
		format: format.combine(
			format.label({ label: process.env.npm_package_name }),
			format.timestamp(),
			format.errors({ stack: true }),
			logFormat
		),
		transports: [
			new transports.Console(),
			new transports.File({ level: 'info', filename: 'logs/production.log' }),
		],
	},
};

type ObjectKey = keyof typeof loggerOptions;
const environment = process.env.NODE_ENV || 'dev';

const logger = createLogger(loggerOptions[environment as ObjectKey]);

export default logger;
