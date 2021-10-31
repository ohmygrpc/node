import type { Context } from './context';
import type { Logger } from './logger';

const noop: () => void = () => undefined;

const NoopLogger: () => Logger = () => ({
  debug: noop,
  info: noop,
  warn: noop,
  error: noop,
});

export const mockContext = <Request, Response>(req: Request) => {
  return {
    req,
    app: { context: { logger: NoopLogger() } },
  } as Context<Request, Response>;
};
