function getEnv(key: string, defaultValue: string): string {
  let value = process.env[key];
  if (!value) {
    value = defaultValue;
  }
  return value;
}

function mustAtoi(s: string): number {
  const i = parseInt(s, 10);
  if (Number.isNaN(i)) {
    throw new Error(`invalid numeric value: ${s}`);
  }
  return i;
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
