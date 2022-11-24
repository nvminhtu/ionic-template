import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsyncPage } from './async.page';

const routes: Routes = [
  {
    path: '',
    component: AsyncPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsyncPageRoutingModule {}
