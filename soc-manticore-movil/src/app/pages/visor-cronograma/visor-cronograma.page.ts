import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-visor-cronograma',
  templateUrl: './visor-cronograma.page.html',
  styleUrls: ['./visor-cronograma.page.scss'],
})
export class VisorCronogramaPage implements OnInit {


  ubicacionVendedor = [];
  latitud = 0;
  longitud = 0;

  constructor(private route: ActivatedRoute,
              private navController: NavController) {
  }

  ngOnInit() {

    const coordenadas = this.route.snapshot.paramMap.get('geo');
    const latLngArreglo = coordenadas.split(',');
    this.latitud = +latLngArreglo[0];
    this.longitud = +latLngArreglo[1];
    this.ubicacionVendedor.push(this.latitud, this.longitud);

    console.log(coordenadas, this.ubicacionVendedor);
    // const [latitud] = +latLng[0];
    // const longitud = +latLng[1];


  }


  irAMenuPrincipal() {
    this.navController.navigateRoot(`menu-principal`,).then();

  }
}
