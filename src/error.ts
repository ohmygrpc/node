import { status } from '@grpc/grpc-js';
import { Context } from 'mali';

import { AppContext } from '~types';

import { Logger } from './logger';

export class GrpcError extends Error {
  constructor(public status: status, message: string) {
    super(message);
  }

  get code(): status {
    return this.status;
  }
}

export const unhandledErrorHandler = (logger: Logger) => (
  err: Error,
  ctx: Context<AppContext>,
): void => {
  if (err instanceof GrpcError) {
    return;
  }

  logger.error({
    message: `server error for call ${ctx.name} of type ${ctx.type}`,
    error: err.message,
    stacktrace: err.stack,
  });
};
