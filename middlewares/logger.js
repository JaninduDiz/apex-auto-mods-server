import { log, chalk } from '../utils/chalk-colors.js';

// Middleware to log HTTP requests with colors
export const requestLogger = (req, res, next) => {
    const method = req.method;
    const url = req.originalUrl;
    const timestamp = new Date().toISOString();

    // Color code based on HTTP method
    switch (method) {
        case 'GET':
            log.get(`${chalk.gray(timestamp)} - ${url}`);
            break;
        case 'POST':
            log.post(`${chalk.gray(timestamp)} - ${url}`);
            break;
        case 'PUT':
            log.put(`${chalk.gray(timestamp)} - ${url}`);
            break;
        case 'DELETE':
            log.delete(`${chalk.gray(timestamp)} - ${url}`);
            break;
        default:
            console.log(chalk.white.bold(method), `${chalk.gray(timestamp)} - ${url}`);
    }

    next();
};

// Error logging middleware
export const errorLogger = (err, req, res, next) => {
    log.error(`${err.message} - ${req.method} ${req.originalUrl}`);
    log.debug(chalk.red(err.stack));
    next(err);
};
