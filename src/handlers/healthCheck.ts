import { HealthCheckRequest, HealthCheckResponse } from '@idl/echo/v1/echo';
import { Context } from '../types';

export async function healthCheck(
  ctx: Context<HealthCheckRequest, HealthCheckResponse>,
): Promise<void> {
  ctx.res = {};
}
