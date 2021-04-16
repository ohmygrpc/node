import { loadSync, PackageDefinition } from '@grpc/proto-loader';
import { join } from 'path';
import { GrpcObject, loadPackageDefinition } from '@grpc/grpc-js';

const packageDefinition: PackageDefinition = loadSync(
  join(__dirname, '../idl/services/echo/v1/echo.proto'),
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
    arrays: true,
    objects: true,
  },
);

export const protoDescriptor: GrpcObject = loadPackageDefinition(
  packageDefinition,
);
export const services: GrpcObject = <GrpcObject>protoDescriptor['services'];
export const echo: GrpcObject = <GrpcObject>services['echo'];
export const echoV1: GrpcObject = <GrpcObject>echo['v1'];
export const echoV1Service: GrpcObject = <GrpcObject>echoV1['EchoService'];
export const echoV1ServiceDefinition = echoV1Service['service'];
