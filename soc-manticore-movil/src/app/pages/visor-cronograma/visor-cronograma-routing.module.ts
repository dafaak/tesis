import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisorCronogramaPage } from './visor-cronograma.page';

const routes: Routes = [
  {
    path: '',
    component: VisorCronogramaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisorCronogramaPageRoutingModule {}
