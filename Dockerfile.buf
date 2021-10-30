FROM bufbuild/buf:1.0.0-rc6

RUN apk add --update --no-cache \
    nodejs=14.18.1-r0 \
    npm=7.17.0-r0 && \
  rm -rf /var/cache/apk/*

ARG TS_PROTO_VERSION=1.83.1

RUN npm i -g ts-proto@${TS_PROTO_VERSION}

ENTRYPOINT ["/usr/local/bin/buf"]
