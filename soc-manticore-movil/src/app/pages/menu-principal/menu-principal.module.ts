import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPrincipalPageRoutingModule } from './menu-principal-routing.module';

import { MenuPrincipalPage } from './menu-principal.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPrincipalPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [MenuPrincipalPage]
})
export class MenuPrincipalPageModule {}
