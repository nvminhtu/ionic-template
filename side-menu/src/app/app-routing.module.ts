import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  // {
  //   path: '',
  //   redirectTo: 'accordion/Overview',
  //   pathMatch: 'full',
  // },
  {
    path: 'accordion/:path',
    loadChildren: () =>
      import('./details/details.module').then((m) => m.DetailsPageModule),
  },
  {
    path: 'intro',
    loadChildren: () => import('./intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'search-language',
    loadChildren: () => import('./search-language/search-language.module').then( m => m.SearchLanguagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
