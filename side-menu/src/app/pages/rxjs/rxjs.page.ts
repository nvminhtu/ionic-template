import { Component, OnInit } from '@angular/core';
import { FormControl, AbstractControl } from '@angular/forms';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

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

  ofGenerateFunc() {
    // test rxJS: Of
    this.nums = of(1, 2, 3); // complete: 'complete' - output: 1,2,3
    this.squareValues = map((val: number) => val * val); // function này : sử dụng hàm map thông thường
    // this.squaredNums = this.squareValues(this.nums);  // chạy hàm map cho nums: là 1 Observable từ tập giá trị Primittives
    // this.squaredNums.subscribe((x:number) => console.log(x)); // . subscribe(observer)
    // this.data = this.squaredNums.subscribe((x: number)=> console.log(x));
  
    const source$ = of(1, 2, 3, 4, 5);  //output: 1,2,3,4,5
    const subscribe = source$.subscribe((val:number) => this.data.push(val));
  
  }
  ngOnInit() {
    this.ofGenerateFunc();
  }
}
