import { Component, OnInit } from '@angular/core';
import { RoutePath } from '../../models/app.constant';

@Component({
  selector: 'app-mt-nav-bar-menu',
  templateUrl: './mt-nav-bar-menu.component.html',
  styleUrls: ['./mt-nav-bar-menu.component.scss'],
})
export class MtNavBarMenuComponent implements OnInit {
  inernalLinks = [
    { title: 'Home', url: RoutePath.Home },
    { title: 'Async', url: RoutePath.Async },
    { title: 'HttpRxJS', url: RoutePath.HttpRxJS },
    { title: 'IonicLifeCycle', url: RoutePath.IonicLifeCycle },
  ];

  constructor() {
    //Dependency injection in the constructor
    // Called first time before the ngOnInit()
  }

  ngOnInit() {
    // ngOnInit, get called after Component initialised!
    // Called after the constructor and called  after the first ngOnChanges()
  }

  //ngOnChanges is called when an input or output binding value changes
  transformParentLink(link: string) {
    // example func
    return (link = '/parent/' + link);
  }
}
