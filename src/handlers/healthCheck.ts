import { Context } from '../types';
import {
  HealthCheckRequest,
  HealthCheckResponse,
} from '../idl/services/echo/v1/echo';

export async function healthCheck(
  ctx: Context<HealthCheckRequest, HealthCheckResponse>,
): Promise<void> {
  ctx.res = {};
}
