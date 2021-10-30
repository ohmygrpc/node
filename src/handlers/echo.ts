import { EchoRequest, EchoResponse } from '@idl/echo/v1/echo';
import { Context } from '../types';

export async function echo(
  ctx: Context<EchoRequest, EchoResponse>,
): Promise<void> {
  const {
    req: { msg },
  } = ctx;

  ctx.res = { msg };
}
