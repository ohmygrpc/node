import { status } from '@grpc/grpc-js';
import { performance } from 'perf_hooks';

import { GrpcError } from '../error';
import { App as Context } from '../types';

export async function stdoutUnaryServerInterceptor(
  ctx: Context,
  next: () => Promise<void>,
): Promise<void> {
  const {
    fullName,
    service,
    package: pkg,
    app: {
      context: { logger },
    },
  } = ctx;

  const [startsAt, before] = [new Date(), performance.now()];
  let code = status[status.OK];
  let errLog: { error?: string; stacktrace?: string } = {};

  try {
    await next();
  } catch (e) {
    code = status[status.UNKNOWN];
    if (e instanceof GrpcError) {
      errLog = { error: e.message, stacktrace: e.stack };
      code = status[e.code];
    }
    throw e;
  } finally {
    const fullNamePrefix = `/${pkg}.${service}/`;
    const grpc = {
      code,
      method: fullName.replace(fullNamePrefix, ''),
      service: `${pkg}.${service}`,
      start_time: startsAt.toISOString(),
      time_ms: (performance.now() - before).toFixed(3),
    };

    logger.info({
      grpc,
      msg: `finished unary call with code ${code}`,
      ...errLog,
    });
  }
}
