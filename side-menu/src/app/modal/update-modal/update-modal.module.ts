import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateModalPageRoutingModule } from './update-modal-routing.module';

import { UpdateModalPage } from './update-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateModalPageRoutingModule
  ],
  declarations: [UpdateModalPage]
})
export class UpdateModalPageModule {}
