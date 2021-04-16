function getEnv(key: string, defaultValue: string): string {
  let value = process.env[key];
  if (!value) {
    value = defaultValue;
  }
  return value;
}

function mustAtoi(s: string): number {
  return parseInt(s, 10);
}

export const settings: Map<string, any> = new Map<string, any>([
  ['grpcServerPort', getEnv('GRPC_SERVER_PORT', '8080')],
  ['statsdUdpPort', getEnv('STATSD_UDP_PORT', '8125')],

  ['env', getEnv('ENV', 'development')],
  ['subEnvId', getEnv('SUB_ENV_ID', 'local')],
  ['namespace', getEnv('NAMESPACE', 'development-local')],

  [
    'gracefulShutdownTimeoutMs',
    mustAtoi(getEnv('GRACEFUL_SHUTDOWN_TIMEOUT_MS', '10000')),
  ],
]);
