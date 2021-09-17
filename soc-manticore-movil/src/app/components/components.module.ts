import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MapaComponent} from './mapa/mapa.component';
import {HeaderComponent} from './header/header.component';
import {IonicModule} from '@ionic/angular';



@NgModule({
  declarations: [MapaComponent,HeaderComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [MapaComponent, HeaderComponent]
})
export class ComponentsModule { }
