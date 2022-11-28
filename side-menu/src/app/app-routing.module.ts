import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RoutePath } from './models/app.constant';

const routes: Routes = [
  {
    path: '',
    redirectTo: RoutePath.Home,
    pathMatch: 'full',
    // loadChildren: () =>
    //   import('./pages/intro/intro.module').then((m) => m.IntroPageModule),
  },
  {
    path: 'intro',
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
    loadChildren: () =>
      import('./pages/ionic-life-cycle/ionic-life-cycle.module').then(
        (m) => m.IonicLifeCyclePageModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'reactive-form',
    loadChildren: () =>
      import('./pages/reactive-form/reactive-form.module').then(
        (m) => m.ReactiveFormPageModule
      ),
  },
  {
    path: 'rxjs',
    loadChildren: () => import('./pages/rxjs/rxjs.module').then( m => m.RxjsPageModule)
  },  {
    path: 'simple-modal',
    loadChildren: () => import('./modal/simple-modal/simple-modal.module').then( m => m.SimpleModalPageModule)
  },
  {
    path: 'update-modal',
    loadChildren: () => import('./modal/update-modal/update-modal.module').then( m => m.UpdateModalPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
