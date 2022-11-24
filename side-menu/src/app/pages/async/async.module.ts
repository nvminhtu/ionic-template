import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsyncPageRoutingModule } from './async-routing.module';

import { AsyncPage } from './async.page';

import { SharedModule } from '../../modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsyncPageRoutingModule,
    SharedModule,
  ],
  declarations: [AsyncPage],
})
export class AsyncPageModule {}
