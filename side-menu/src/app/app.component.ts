import { Component, OnInit } from '@angular/core';
import { AppLogger } from './services/logger';

import menuData from '../assets/menu.json';
import { throws } from 'assert';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  menu = menuData;
  logger: AppLogger | undefined; // khai bao property chinh la cai service
  constructor() {} // private propername3: ServiceType3, // private propername2: ServiceType2, // private propername1: ServiceType1,
  ngOnInit(): void {
    //this.logger.debug('creating storage');
    console.log('App');
  }
}
