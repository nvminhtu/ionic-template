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
  nums = of(1, 2, 3);
  squareValues = map((val: number) => val * val);
  squaredNums = this.squareValues(this.nums);
  // squaredNums.subscribe(x => console.log(x));

  constructor() {}
  ofGenerateFunc() {}
  ngOnInit() {
    this.squaredNums.subscribe((x) => console.log(x));
  }
}
