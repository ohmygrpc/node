import type {
  HealthCheckRequest,
  HealthCheckResponse,
} from '@ohmygrpc/idl/services/echo/v1/echo';

import type { Handler } from './types';

export const healthCheck: Handler<
  HealthCheckRequest,
  HealthCheckResponse
> = async () => {
  return {};
};
