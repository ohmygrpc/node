import { settings } from './config';
import { PlaywrightworkerGrpcServer } from './server';

function main(): void {
  const server = new PlaywrightworkerGrpcServer();
  server.start(settings.get('grpcServerPort'));
}

main();
