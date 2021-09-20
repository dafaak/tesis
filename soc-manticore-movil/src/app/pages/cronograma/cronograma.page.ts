import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {Geolocation, Geoposition} from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-cronograma',
  templateUrl: './cronograma.page.html',
  styleUrls: ['./cronograma.page.scss'],
})
export class CronogramaPage implements OnInit {

  ubicacionVendedor = '';

  constructor(private navController: NavController,
              private geolocation: Geolocation) {
  }

  ngOnInit() {
  }

  async irAMapa() {


    try {
      const res = await this.obtenerGeolocation();
      this.ubicacionVendedor = `${res.coords.latitude},${res.coords.longitude}`;
      await this.navController.navigateRoot(
        `visor-cronograma/${this.ubicacionVendedor}`
      );
    } catch (err) {
      console.error(err);
    }

  }

  obtenerGeolocation(): Promise<Geoposition> {
    return this.geolocation.getCurrentPosition()
    //   .then(
    //     res => {
    //       console.log(res);
    //     }
    //   ).catch(
    //   error => {
    //     console.log(error, 'No se pudo obtener la ubicación');
    //   }
    // )

  }
}
