import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.page.html',
  styleUrls: ['./menu-principal.page.scss'],
})
export class MenuPrincipalPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  irVisita() {
    this.navController.navigateRoot('main/tabs/ventas')

  }
}
