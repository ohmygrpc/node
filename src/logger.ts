type Message = string | Record<string, any>;

enum LogLevel {
  DEBUG = 'debug',
  INFO = 'info',
  WARN = 'warn',
  ERROR = 'error',
}

export interface Logger {
  debug: (msg: Message) => void;
  info: (msg: Message) => void;
  warn: (msg: Message) => void;
  error: (msg: Error) => void;
}

const toJsonFormattedOneLineText = (
  msg: Message,
  { level = LogLevel.INFO }: { level?: LogLevel } = {},
): string => {
  if (typeof msg === 'string') {
    msg = { message: msg };
  }

  const now = new Date();
  return JSON.stringify({
    occurred_at_human: now.toISOString(),
    occurred_at_ms: now.getTime(),
    ...msg,
    level,
  });
};

export const ConsoleLogger: () => Logger = () => {
  const log = console.log.bind(console);
  return {
    debug: (msg: Message): void => {
      log(toJsonFormattedOneLineText(msg, { level: LogLevel.DEBUG }));
    },
    info: (msg: Message): void => {
      log(toJsonFormattedOneLineText(msg, { level: LogLevel.INFO }));
    },
    warn: (msg: Message): void => {
      log(toJsonFormattedOneLineText(msg, { level: LogLevel.WARN }));
    },
    error: (err: Error): void => {
      log(
        toJsonFormattedOneLineText(
          {
            message: err.message,
            stacktrace: err.stack,
          },
          { level: LogLevel.ERROR },
        ),
      );
    },
  };
};
