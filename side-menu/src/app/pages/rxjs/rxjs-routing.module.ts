import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RxjsPage } from './rxjs.page';

const routes: Routes = [
  {
    path: '',
    component: RxjsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RxjsPageRoutingModule {}
