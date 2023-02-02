import express from 'express';
import logger from './utils/logger.util';
import { envConfig } from './configs/env.config';
import helmet from 'helmet';
import morgan from 'morgan';
import router from './routes';

// Environment configuration
envConfig(process.env.NODE_ENV);

// Constants
const PORT = process.env.PORT || 3000;

const app = express();

// App Configurations
app.use(morgan('dev'));
app.use(helmet());
app.use(express.json());

app.use(router);

// Bootstrap
app.listen(PORT, () => {
	logger.info(`App is running on port ${PORT}`);
});
