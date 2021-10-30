import Mali from 'mali';
import { unhandledErrorHandler } from './error';
import * as handlers from './handlers';
import { stdoutUnaryServerInterceptor } from './interceptors';
import { Logger } from './logger';
import { AppContext } from './types';
import { EchoServiceService } from './idl/services/echo/v1/echo';

export const initializeGrpcServer = (logger: Logger): Mali<AppContext> => {
  const app = new Mali<AppContext>(EchoServiceService, 'EchoService');
  app.context = {
    logger,
  };

  // interceptors
  app.use(stdoutUnaryServerInterceptor);

  app.use(handlers);

  app.on('error', unhandledErrorHandler(logger));

  return app;
};
