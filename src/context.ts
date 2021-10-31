import type { Context as MaliContext } from 'mali';

import type { Logger } from './logger';
import { NoopLogger } from './logger';

export interface AppContext {
  logger: Logger;
}

export interface App extends MaliContext<AppContext> {
  metadata: Record<string, string>;
  locals: Record<string, unknown>;
}

export interface Context<Request, Response> extends App {
  req: Request;
  res: Response;
}

export const mockContext = <Request, Response>(
  req: Request,
  { logger = NoopLogger() } = {},
) => {
  return {
    req,
    app: { context: { logger } },
  } as Context<Request, Response>;
};
