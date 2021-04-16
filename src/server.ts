import { Server, ServerCredentials } from '@grpc/grpc-js';

import { echoV1ServiceDefinition } from './grpc';
import { healthCheck } from './handlers/healthCheck';
import { echo } from './handlers/echo';

export class PlaywrightworkerGrpcServer {
  private server: Server = new Server();

  constructor() {
    // eslint-disable-next-line
    // @ts-ignore
    this.server.addService(echoV1ServiceDefinition, {
      healthCheck: healthCheck,
      echo: echo,
    });
  }

  start(port: string): void {
    console.log('starting server...');

    this.server.bindAsync(
      `0.0.0.0:${port}`,
      ServerCredentials.createInsecure(),
      (err) => {
        if (err) {
          throw err;
        }

        this.server.start();
      },
    );
  }
}
