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

export interface Settings {
  Env: string;
  SubEnvId: string;
  Namespace: string;

  GrpcServerPort: string;
  StatsdUdpPort: string;

  GracefulShutdownTimeoutMs: number;
}

export const settings: Settings = {
  Env: getEnv('ENV', 'development'),
  SubEnvId: getEnv('SUB_ENV_ID', 'local'),
  Namespace: getEnv('NAMESPACE', 'development-local'),

  GrpcServerPort: getEnv('GRPC_SERVER_PORT', '8080'),
  StatsdUdpPort: getEnv('STATSD_UDP_PORT', '8125'),

  GracefulShutdownTimeoutMs: mustAtoi(
    getEnv('GRACEFUL_SHUTDOWN_TIMEOUT_MS', '10000'),
  ),
};
