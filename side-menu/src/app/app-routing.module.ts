import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/intro/intro.module').then((m) => m.IntroPageModule),
  },
  {
    path: 'async',
    loadChildren: () =>
      import('./pages/async/async.module').then((m) => m.AsyncPageModule),
  },
  {
    path: 'http-rxjs',
    loadChildren: () =>
      import('./pages/http-rxjs/http-rxjs.module').then(
        (m) => m.HttpRxjsPageModule
      ),
  },
  {
    path: 'ionic-life-cycle',
    loadChildren: () => import('./pages/ionic-life-cycle/ionic-life-cycle.module').then( m => m.IonicLifeCyclePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
