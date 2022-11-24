import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable()
export class AppConfig {

  static get API_ENDPOINT(): string {
    return environment.apiVersion !== '' ? (environment.apiUrl + '/' + environment.apiVersion) : environment.apiUrl;
  }

  static get IS_ENABLED_HEY_CARMD_COMMAND() {
    return AppConfig.isEnabledHeyCarMDCommand;
  }

  static setEnabledHeyCarMDCommand(isEnabled: boolean) {
    AppConfig.isEnabledHeyCarMDCommand = isEnabled;
  }

  static get IS_DEBUGGING() {
    return AppConfig.isDebugging;
  }

  static setIsDebugging(isDebugging: boolean) {
    AppConfig.isDebugging = isDebugging;
  }

  private static isEnabledHeyCarMDCommand = false;
  private static isDebugging = true;
  /**
   * Default HTTP Request Timeout in Milliseconds
   *
   * @static
   * @memberof AppConfig
   */
  static defaultHttpRequestTimeoutInMs = 90_000;
  static longHttpRequestTimeoutInMs = 300_000;
  static createReportRequestTimeoutInMs = 180_000;
}
export const API_ENDPOINT = AppConfig.API_ENDPOINT;
export const TIMEOUT_VOICE_SESSION = 1_200_000; // 20 minutes
export const INTERVAL_IOS_LISTEN_WAIT = 3_000; // 3 seconds
export const INTERVAL_IOS_LISTEN_COMMAND_WAIT = 2_000; // 2 seconds
export const TIMEOUT_IOS_LISTEN_WAIT = 15_000; // 15 seconds
export const GET_WEATHER_INTERVAL = 3_600_000; // 1 hour
export const DEVICE_TEST = '6d8461078b232c80';

