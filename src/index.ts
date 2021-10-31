import { settings } from './config';
import { ConsoleLogger as Logger } from './logger';
import { initializeGrpcServer } from './server';

const logger = Logger();

async function main() {
  const server = initializeGrpcServer(logger);
  await server.start(`0.0.0.0:${settings.GrpcServerPort}`);
  logger.info(`Start gRPC Server on port ${settings.GrpcServerPort}`);
}

main().catch(logger.error);
