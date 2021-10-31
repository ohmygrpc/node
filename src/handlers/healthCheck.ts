import {
  HealthCheckRequest,
  HealthCheckResponse,
} from '@ohmygrpc/idl/services/echo/v1/echo';

import { Context } from '../types';

export async function healthCheck(
  ctx: Context<HealthCheckRequest, HealthCheckResponse>,
): Promise<void> {
  ctx.res = {};
}
