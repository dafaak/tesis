import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.page.html',
  styleUrls: ['./menu-principal.page.scss'],
})
export class MenuPrincipalPage implements OnInit {

  constructor(private navController: NavController,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    // this.route.paramMap.subscribe( console.log);// {params: {lon,lat}
    // // this.route.url.subscribe(res => console.log(res)); // []
    // console.log(    this.route.outlet);// primary
    // this.route.data.subscribe(console.log);
    this.route.params.subscribe(console.log)

  }

  irVisita() {
    this.navController.navigateRoot('main/tabs/ventas').then()

  }

  irAMapa() {
    //const latitud;
    // const longitud;
    this.route.params.subscribe(parametros => {
      const {lat: latitud, lon: longitud} = parametros;
      this.navController.navigateRoot(`/visor-cronograma/${latitud},${longitud}`).then()
    });
  }

}
