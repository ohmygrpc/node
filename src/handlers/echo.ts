import {
  sendUnaryData,
  ServerUnaryCall,
} from '@grpc/grpc-js/build/src/server-call';

type EchoRequestType = {
  msg: string;
};
type EchoResponseType = {
  msg: string;
};

export function echo(
  call: ServerUnaryCall<EchoRequestType, EchoResponseType>,
  callback: sendUnaryData<EchoResponseType>,
) {
  const req = call.request;
  const msg = req.msg;

  callback(null, {
    msg,
  });
}
