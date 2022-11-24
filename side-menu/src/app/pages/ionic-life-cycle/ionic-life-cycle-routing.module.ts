import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonicLifeCyclePage } from './ionic-life-cycle.page';

const routes: Routes = [
  {
    path: '',
    component: IonicLifeCyclePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonicLifeCyclePageRoutingModule {}
