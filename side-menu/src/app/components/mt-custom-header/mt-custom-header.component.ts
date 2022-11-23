import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mt-custom-header',
  templateUrl: './mt-custom-header.component.html',
  styleUrls: ['./mt-custom-header.component.scss'],
})
export class MtCustomHeaderComponent implements OnInit {
  @Input() pageTitle: string = '';
  constructor() {}

  ngOnInit() {}
}
