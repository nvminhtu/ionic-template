/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { LoggingService } from 'ionic-logging-service';
import { Logger } from './logger';
import { LoggerService } from './logger.service';

export class AppLogger extends Logger {}

@Injectable({
  providedIn: 'root',
})
export class AppLoggerService extends LoggerService {
  constructor(protected override loggingService: LoggingService) {
    super(loggingService);
  }
}
