import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonicModalAdvancedPageRoutingModule } from './ionic-modal-advanced-routing.module';

import { IonicModalAdvancedPage } from './ionic-modal-advanced.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicModalAdvancedPageRoutingModule,
    SharedModule,
  ],
  declarations: [IonicModalAdvancedPage],
})
export class IonicModalAdvancedPageModule {}
