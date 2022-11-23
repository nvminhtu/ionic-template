import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';

import menuData from '../assets/menu.json';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  menu = menuData;
  constructor(
    private router: Router,
    private menuCtrl: MenuController,
    private navCtrl: NavController
  ) {}
}
