import { Component, OnInit } from '@angular/core';
import { AppEnumEvents, AppYoutubers } from 'src/app/models/app.enum';

@Component({
  selector: 'app-ionic-life-cycle',
  templateUrl: './ionic-life-cycle.page.html',
  styleUrls: ['./ionic-life-cycle.page.scss'],
})
// Why: test Life cycle and running the order of each function
// Test complex order of function and see how it shown
// Test function running
export class IonicLifeCyclePage implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log(AppEnumEvents.HandleGoBackReport);
    // console.log(AppYoutubers.ShowEditors);
    // console.log('ngOnInit start');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter - fire');
  }
  // change the order of function
  ionViewWillEnter() {
    console.log('ionViewWillEnter - fire');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave - fire');
  }
  ionViewDidLeave() {
    console.log('ionViewDidLeave - fire');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy - fire');
  }
}
