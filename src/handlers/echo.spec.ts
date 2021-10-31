import type {
  EchoRequest,
  EchoResponse,
} from '@ohmygrpc/idl/services/echo/v1/echo';

import { mockContext } from '../context';
import { echo } from './echo';

describe('echo', () => {
  test('OK', async () => {
    const msg = 'Hello';
    const ctx = mockContext<EchoRequest, EchoResponse>({ msg });

    const resp = await echo(ctx);
    expect(resp).toStrictEqual({ msg });
  });
});
