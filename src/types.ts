import { Context as MaliContext } from 'mali';

import { Logger } from './logger';

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

export type Handler<Request, Response> = (
  ctx: Context<Request, Response>,
) => Promise<Response>;
