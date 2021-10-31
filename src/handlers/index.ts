import { echo } from './echo';
import { healthCheck } from './healthCheck';
import type { Handlers } from './types';

export * from './types';

// check unimplemented handler exist
export const handlers: Handlers = {
  echo,
  healthCheck,
};
