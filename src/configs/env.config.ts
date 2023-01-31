import dotenv from 'dotenv';
import logger from '../utils/logger.util';

export const envConfig = (node_env: string | undefined) => {
	if (!node_env) throw Error(`NODE_ENV expected to be "prod" | "dev" | ...`);
	logger.info(`node environment: ${node_env}`);

	const envFile = node_env === 'prod' ? '.env' : `.${node_env}.env`;
	const status = dotenv.config({ path: envFile });

	if (status.error) throw Error(status.error.message);
};
