import {
  sendUnaryData,
  ServerUnaryCall,
} from '@grpc/grpc-js/build/src/server-call';

type HealthCheckRequestType = never;
type HealthCheckResponseType = never;

export function healthCheck(
  call: ServerUnaryCall<HealthCheckRequestType, HealthCheckResponseType>,
  callback: sendUnaryData<HealthCheckResponseType>,
) {
  callback(null, null);
}
