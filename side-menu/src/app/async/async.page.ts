import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/Rx';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/delay';
// import 'rxjs/add/operator/toPromise';
// import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-async',
  templateUrl: './async.page.html',
  styleUrls: ['./async.page.scss'],
})
export class AsyncPage implements OnInit {
  messageApp1: any;

  // #mt01 Call Github
  private apiURL: string = 'https://api.github.com/';
  public relay: string = 'UnInit';
  public response: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  // 01. async - return Promise
  async myDisplay() {
    let myPromise = new Promise(function (resolve) {
      resolve('I love You !!');
    });
    this.messageApp1 = await myPromise;
  }

  // 02. async - promise all
  promise1 = new Promise(function (resolve) {
    resolve('Promise 1 excecuted!');
  });

  promise2 = new Promise(function (resolve) {
    resolve('Promise 2 excecuted!');
  });

  async sequencePromise() {
    // return new Promise / error if 1 one of Promises fail
    await Promise.all([this.promise1, this.promise2]);
    return 'done!';
  }
}
