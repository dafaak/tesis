import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'cronograma',
    loadChildren: () => import('./pages/cronograma/cronograma.module').then( m => m.CronogramaPageModule)
  },
  {
    path: 'visor-cronograma/:geo',
    loadChildren: () => import('./pages/visor-cronograma/visor-cronograma.module').then( m => m.VisorCronogramaPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
