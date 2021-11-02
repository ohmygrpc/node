import { ChannelCredentials } from '@grpc/grpc-js';
import type { EchoResponse } from '@ohmygrpc/idl/services/echo/v1/echo';
import { EchoServiceClient } from '@ohmygrpc/idl/services/echo/v1/echo';

const cli = new EchoServiceClient(
  'dns:///localhost:8080',
  ChannelCredentials.createInsecure(),
);

// npm run start:dev 로 서버 띄우고 아래 명령어로 실행하면 됩니다.
// npx ts-node src/client_example.ts
const run = async () => {
  const ret = await new Promise<EchoResponse>((resolve, reject) => {
    cli.echo({ msg: 'Hello' }, (err, resp) =>
      err ? reject(err) : resolve(resp),
    );
  });

  // { msg: 'Hello' }
  console.log(ret);
};

run()
  .catch(console.error)
  .finally(() => cli.close());
