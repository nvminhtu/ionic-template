import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchLanguagePageRoutingModule } from './search-language-routing.module';

import { SearchLanguagePage } from './search-language.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchLanguagePageRoutingModule
  ],
  declarations: [SearchLanguagePage]
})
export class SearchLanguagePageModule {}
