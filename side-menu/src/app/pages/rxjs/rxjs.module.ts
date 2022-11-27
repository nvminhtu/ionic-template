import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RxjsPageRoutingModule } from './rxjs-routing.module';

import { RxjsPage } from './rxjs.page';

import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RxjsPageRoutingModule,
    SharedModule
  ],
  declarations: [RxjsPage]
})
export class RxjsPageModule {}
