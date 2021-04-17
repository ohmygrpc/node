import { settings } from './config';
import { EchoServiceGrpcServer } from './server';

function main(): void {
  const server = new EchoServiceGrpcServer();
  server.start(settings.get('grpcServerPort'));
}

main();
