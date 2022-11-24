import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HttpRxjsPageRoutingModule } from './http-rxjs-routing.module';

import { HttpRxjsPage } from './http-rxjs.page';

import { SharedModule } from '../modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpRxjsPageRoutingModule,
    SharedModule,
  ],
  declarations: [HttpRxjsPage],
})
export class HttpRxjsPageModule {}
