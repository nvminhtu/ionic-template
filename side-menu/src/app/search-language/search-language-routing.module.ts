import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchLanguagePage } from './search-language.page';

const routes: Routes = [
  {
    path: '',
    component: SearchLanguagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchLanguagePageRoutingModule {}
