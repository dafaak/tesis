import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisorCronogramaPageRoutingModule } from './visor-cronograma-routing.module';

import { VisorCronogramaPage } from './visor-cronograma.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisorCronogramaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [VisorCronogramaPage]
})
export class VisorCronogramaPageModule {}
