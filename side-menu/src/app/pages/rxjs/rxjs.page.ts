import { Component, OnInit } from '@angular/core';
import { FormControl, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

import { reduce, filter } from 'rxjs';
// use: for Observable
@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.page.html',
  styleUrls: ['./rxjs.page.scss'],
})
export class RxjsPage implements OnInit {
  nums: any;
  squareValues: any;
  squaredNums!: any;

  data: number[] = [];

  constructor() {}

  // #mt1: first demo Observable
  firstObservable() {
    var observer = new Observable(function subscribe2(subscriber) {
      subscriber.next('Call the first Observable!!');
    });
    observer.subscribe((x) => console.log(x));
  }

  secondObservable() {
    var observer = new Observable(function subscribe(subscriber) {
      try {
        subscriber.next('First item');
        subscriber.next('Second item');
      } catch (e) {
        subscriber.error(e);
      }
    });

    // observer.subscribe((x) => console.log(x));
    // cach viet nay sai do phien ban moi ko support
    observer.subscribe((x) => console.log(x));
  }

  operatorObservable() {
    let obs = of(1, 2, 3, 4, 5, 6, 7, 8, 9);
    // 2,4,6,8
    /// 0 + 2
    //  = 2 + 4 = 6
    // = 6 + 6 = 12
    // = 12 + 8 = 20

    // obs.pipe(
    //   // chay operator1(),
    //   // chay operator2(),
    //   // chay operator3(),
    // )
    let case01 = obs.pipe(
      filter((x) => x % 2 == 0),
      reduce((acc, one) => acc + one, 0)
      // accumulator: giá trị trả về từ các lần call callback trước.
      // currentValue: giá trị của phần tử hiện tại trong array.
      // currentIndex: index của phần tử hiện tại.
      // obs -> array: chính là mảng hiện tại.
    );
    case01.subscribe((x) => console.log(x));
  }

  ofGenerateFunc() {
    // test rxJS: Of
    this.nums = of(1, 2, 3); // complete: 'complete' - output: 1,2,3
    this.squareValues = map((val: number) => val * val); // function này : sử dụng hàm map thông thường
    // this.squaredNums = this.squareValues(this.nums);  // chạy hàm map cho nums: là 1 Observable từ tập giá trị Primittives
    // this.squaredNums.subscribe((x:number) => console.log(x)); // . subscribe(observer)
    // this.data = this.squaredNums.subscribe((x: number)=> console.log(x));
    const source$ = of(1, 2, 3, 4, 5); //output: 1,2,3,4,5
    const subscribe = source$.subscribe((val: number) => this.data.push(val));
  }

  ngOnInit() {
    // this.ofGenerateFunc();
    // this.firstObservable();
    // this.secondObservable();
    this.operatorObservable();
  }
}
