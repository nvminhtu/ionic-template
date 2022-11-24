import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HttpRxjsPage } from './http-rxjs.page';

const routes: Routes = [
  {
    path: '',
    component: HttpRxjsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HttpRxjsPageRoutingModule {}
