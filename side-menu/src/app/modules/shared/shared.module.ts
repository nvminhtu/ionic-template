import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MtCustomHeaderComponent } from 'src/app/components/mt-custom-header/mt-custom-header.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [MtCustomHeaderComponent],
  imports: [IonicModule, CommonModule],
  exports: [MtCustomHeaderComponent],
})
export class SharedModule {}
