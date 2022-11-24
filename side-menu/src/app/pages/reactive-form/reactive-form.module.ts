import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReactiveFormPageRoutingModule } from './reactive-form-routing.module';

import { ReactiveFormPage } from './reactive-form.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ReactiveFormPageRoutingModule,
    SharedModule,
  ],
  declarations: [ReactiveFormPage],
})
export class ReactiveFormPageModule {}
