import { EchoServiceService } from '@ohmygrpc/idl/services/echo/v1/echo';

import { Handler } from '~types';

import { echo } from './echo';
import { healthCheck } from './healthCheck';

type Handlers = {
  [k in keyof typeof EchoServiceService]: Handler<any, any>;
};

// check unimplemented handler exist
export const handlers: Handlers = {
  echo,
  healthCheck,
};
