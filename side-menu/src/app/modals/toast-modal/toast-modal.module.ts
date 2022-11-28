import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToastModalPageRoutingModule } from './toast-modal-routing.module';

import { ToastModalPage } from './toast-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToastModalPageRoutingModule
  ],
  declarations: [ToastModalPage]
})
export class ToastModalPageModule {}
