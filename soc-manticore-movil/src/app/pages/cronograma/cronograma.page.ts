import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-cronograma',
  templateUrl: './cronograma.page.html',
  styleUrls: ['./cronograma.page.scss'],
})
export class CronogramaPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  irAMapa() {
    this.navController.navigateRoot('visor-cronograma').then();
  }
}
