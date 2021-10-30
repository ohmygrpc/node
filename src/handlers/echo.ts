import { Context } from '../types';
import { EchoRequest, EchoResponse } from '../idl/services/echo/v1/echo';

export async function echo(
  ctx: Context<EchoRequest, EchoResponse>,
): Promise<void> {
  const {
    req: { msg },
  } = ctx;

  ctx.res = { msg };
}
