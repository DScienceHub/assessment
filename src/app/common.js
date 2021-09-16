import winston from 'winston';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'AssessmentClientPage' },
  transports: [
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  ],
});

export { logger, history };
