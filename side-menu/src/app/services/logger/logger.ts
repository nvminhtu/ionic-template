import { Logger as IonicLogger } from 'ionic-logging-service';
import { LoggerService } from './logger.service';

export class Logger {
  private logger: IonicLogger;
  private readonly tagName: string;
  constructor(logger: IonicLogger, tagName: string) {
    this.logger = logger;
    this.tagName = ['[', tagName, ']'].join('');
  }

  public info = (...args: any[]) => {
    if (LoggerService.isOFF) {
      return;
    }
    const msg = this.#msgStringify(args);
    this.logger.info(this.tagName, msg);
  };
  public warn = (...args: any[]) => {
    if (LoggerService.isOFF) {
      return;
    }
    const msg = this.#msgStringify(args);
    this.logger.warn(this.tagName, msg);
  };
  public debug = (...args: any[]) => {
    if (LoggerService.isOFF) {
      return;
    }
    const msg = this.#msgStringify(args);
    this.logger.debug(this.tagName, msg);
  };
  public error = (...args: any[]) => {
    if (LoggerService.isOFF) {
      return;
    }
    const msg = this.#msgStringify(args);
    this.logger.error(this.tagName, msg);
  };
  public entry = (...args: any[]) => {
    if (LoggerService.isOFF) {
      return;
    }
    const msg = this.#msgStringify(args);
    this.logger.entry(this.tagName, msg);
  };
  public exit = (...args: any[]) => {
    if (LoggerService.isOFF) {
      return;
    }
    const msg = this.#msgStringify(args);
    this.logger.exit(this.tagName, msg);
  };

  #msgStringify(args: any[]) {
    const isObject = (val: any) => {
      if (val === null) {
        return false;
      }
      return typeof val === 'function' || typeof val === 'object';
    };

    if (args && Array.isArray(args)) {
      return args
        .map((item) => {
          if (item) {
            if (item instanceof Error) {
              const obj = { ...item };
              delete obj.stack;
              obj.message = item.message;
              obj.name = item.name;
              return JSON.stringify(obj);
              //return JSON.stringify(obj, Object.getOwnPropertyNames(obj));
            }
            if (isObject(item)) {
              if (item.buffer) {
                const obj = { ...item };
                delete obj.buffer;
                return JSON.stringify(obj);
              } else {
                return JSON.stringify(item);
              }
            }
          }
          return item;
        })
        .join(' ');
    }
    return args;
  }
}
