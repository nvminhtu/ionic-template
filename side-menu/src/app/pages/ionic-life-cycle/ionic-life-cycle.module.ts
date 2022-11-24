import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonicLifeCyclePageRoutingModule } from './ionic-life-cycle-routing.module';

import { IonicLifeCyclePage } from './ionic-life-cycle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicLifeCyclePageRoutingModule
  ],
  declarations: [IonicLifeCyclePage]
})
export class IonicLifeCyclePageModule {}
