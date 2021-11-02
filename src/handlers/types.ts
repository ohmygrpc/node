import type { EchoServiceService } from '@ohmygrpc/idl/services/echo/v1/echo';

import type { Context } from '../context';

export type Handler<Request, Response> = (
  ctx: Context<Request, Response>,
) => Promise<Response>;

export type Handlers = {
  [k in keyof typeof EchoServiceService]: Handler<any, any>;
};
