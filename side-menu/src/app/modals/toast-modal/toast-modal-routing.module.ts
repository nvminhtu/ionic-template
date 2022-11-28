import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToastModalPage } from './toast-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ToastModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToastModalPageRoutingModule {}
