import Mali from 'mali';
import { EchoServiceService } from '@idl/echo/v1/echo';
import * as handlers from './handlers';
import { Logger } from './logger';
import { AppContext } from './types';

export const initializeGrpcServer = (logger: Logger): Mali<AppContext> => {
  const app = new Mali<AppContext>(EchoServiceService, 'EchoService');
  app.context = {
    logger,
  };

  app.use(handlers);

  app.on('error', logger.error);

  return app;
};
