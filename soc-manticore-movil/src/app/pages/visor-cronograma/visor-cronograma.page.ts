import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-visor-cronograma',
  templateUrl: './visor-cronograma.page.html',
  styleUrls: ['./visor-cronograma.page.scss'],
})
export class VisorCronogramaPage implements OnInit {


  ubicacionVendedor = [];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {

    const coordenadas = this.route.snapshot.paramMap.get('geo');
    const latLngArreglo = coordenadas.split(',');
    this.ubicacionVendedor.push(+latLngArreglo[0], +latLngArreglo[1]);

    // const [latitud] = +latLng[0];
    // const longitud = +latLng[1];


  }


}
