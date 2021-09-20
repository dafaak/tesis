import {Component, OnInit} from '@angular/core';
import {LoadingController, NavController} from '@ionic/angular';
import {Geolocation, Geoposition} from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-cronograma',
  templateUrl: './cronograma.page.html',
  styleUrls: ['./cronograma.page.scss'],
})
export class CronogramaPage implements OnInit {

  ubicacionVendedor = '';
  cargandoGeo = false;

  constructor(
    public loadingController: LoadingController,
    private navController: NavController,
    private geolocation: Geolocation) {
  }

  ngOnInit() {
  }

  async irAMapa() {


    try {
      this.cargandoGeo = true
      const res = await this.obtenerGeolocation();
      await this.presentLoadingWithOptions();
      this.ubicacionVendedor = `${res.coords.latitude},${res.coords.longitude}`;
      if (this.ubicacionVendedor) {
        console.log(this.ubicacionVendedor);
        await this.navController.navigateRoot(
          `visor-cronograma/${this.ubicacionVendedor}`
        );
      }


    } catch (err) {
      console.error(err);
    }

  }


  async presentLoadingWithOptions(): Promise<void> {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Cargando..',
      duration: 1500
    });
    await loading.present();
    await loading.onDidDismiss();
  }

  // async cerrarLoading(loading): Promise<void> {
  //   await loading.onDidDismiss();
  // }

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
