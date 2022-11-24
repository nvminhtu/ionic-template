import {
  LoggingService,
  Logger as IonicLogger,
  LocalStorageAppender,
} from 'ionic-logging-service';
import { LoggerConfig } from 'src/app/configs/logger.config';
import { Logger } from './logger';
export class LoggerService {
  private static isTurnedOn = true;

  private readonly loggerList: Map<string, Logger>;
  private readonly logger: IonicLogger;

  constructor(protected loggingService: LoggingService) {
    this.loggingService.configure(LoggerConfig.configuration);
    this.logger = this.loggingService.getLogger(LoggerConfig.bundleId);
    this.loggerList = new Map<string, Logger>();
  }

  public static offService() {
    this.isTurnedOn = false;
  }
  public static onService() {
    this.isTurnedOn = true;
  }

  getLogger(tagName = LoggerConfig.defaultTagName): Logger | any {
    let logger = this.loggerList[tagName];
    if (logger == null) {
      logger = new Logger(this.logger, tagName);
      this.loggerList[tagName] = logger;
    }
    if (!logger) {
      return {};
    }
    return logger;
  }
  public getLogMessages = () => this.loggingService.getLogMessages();

  public getStoredLogMessage = () => {
    const appenderList = new IonicLogger()
      ?.getInternalLogger()
      ?.getEffectiveAppenders();
    const localStorageAppender = appenderList.find(
      (a) => a.toString() === 'Ionic.Logging.LocalStorageAppender'
    ) as LocalStorageAppender;
    return localStorageAppender?.getLogMessages();
  };

  public static get isON() {
    return this.isTurnedOn === true;
  }
  public static get isOFF() {
    return this.isTurnedOn === false;
  }
}
