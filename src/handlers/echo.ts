import { EchoRequest, EchoResponse } from '@ohmygrpc/idl/services/echo/v1/echo';

import { Handler } from '~types';

export const echo: Handler<EchoRequest, EchoResponse> = async (ctx) => {
  const {
    req: { msg },
  } = ctx;

  return { msg };
};
