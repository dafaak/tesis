import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {Geolocation} from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-cronograma',
  templateUrl: './cronograma.page.html',
  styleUrls: ['./cronograma.page.scss'],
})
export class CronogramaPage implements OnInit {

  ubicacionVendedor = '';

  constructor(private navController: NavController,
              private geolocation: Geolocation) { }

  ngOnInit() {
    this.obtenerGeolocation();
  }

  irAMapa() {
    this.navController.navigateRoot(
      `visor-cronograma/${this.ubicacionVendedor}`
    ).then();
  }
  obtenerGeolocation(): void {
    this.geolocation.getCurrentPosition()
      .then(
        res => {
          console.log(res);
          this.ubicacionVendedor = `${res.coords.latitude},${res.coords.longitude}`;
        }
      ).catch(
      error => {
        console.log(error, 'No se pudo obtener la ubicación');
      }
    )

  }
}
