import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import * as L from 'leaflet';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent implements OnInit, AfterViewInit {

  @ViewChild('mapa') map;
  // map;


  @Input()
  longitudVendedor: number;

  @Input()
  latitudVendedor: number;

  icon = L.icon(
    {
      iconUrl: '/assets/icon/marker.svg',
      iconSize: [38,95],
      iconAnchor: [22,94],

    }
  );


  constructor() {
  }

  ngOnInit() {
  }


  ngAfterViewInit() {

    this.initMap();


  }

  initMap(): void {
    this.map = L.map('map', {
      center: [this.latitudVendedor, this.longitudVendedor],
      zoom: 15,
      renderer: L.canvas()
    });

    L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

    L.marker([this.latitudVendedor, this.longitudVendedor],{
      icon: this.icon
    }).addTo(this.map)
      .bindPopup('Aqui estas.')
      .openPopup();

    setTimeout(()=> {
      this.map.invalidateSize()
    }, 0)

  }


}
