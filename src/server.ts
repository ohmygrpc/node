import { EchoServiceService } from '@ohmygrpc/idl/services/echo/v1/echo';
import Mali from 'mali';

import type { AppContext, Context } from './context';
import { unhandledErrorHandler } from './error';
import type { Handler } from './handlers';
import { handlers } from './handlers';
import { stdoutUnaryServerInterceptor } from './interceptors';
import type { Logger } from './logger';

export const initializeGrpcServer = (logger: Logger): Mali<AppContext> => {
  const app = new Mali<AppContext>(EchoServiceService, 'EchoService');
  app.context = {
    logger,
  };

  // interceptors
  app.use(stdoutUnaryServerInterceptor);

  app.use(wrap(handlers));

  app.on('error', unhandledErrorHandler(logger));

  return app;
};

const wrap = <T, R>(handlers: Record<string, Handler<T, R>>) => {
  const wrappedHandlers: Record<
    string,
    (ctx: Context<T, R>) => Promise<void>
  > = {};

  for (const [handlerName, handlerFn] of Object.entries(handlers)) {
    wrappedHandlers[handlerName] = async (ctx: Context<T, R>) => {
      ctx.res = await handlerFn(ctx);
    };
  }
  return wrappedHandlers;
};
