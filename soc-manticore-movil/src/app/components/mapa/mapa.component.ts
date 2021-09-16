import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';

declare var mapboxgl: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent implements OnInit, AfterViewInit {

  @ViewChild('mapa') mapa;

  constructor() {
  }

  ngOnInit() {


  }


  ngAfterViewInit() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kZXJzb25yZXYiLCJhIjoiY2tzMjVrczdvMGVxdzJucGsycHpjNGYybSJ9.69SGPABVoQ3v0ZGc30FDlQ';
    const map = new mapboxgl.Map({
      container: this.mapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
    });
  }


}
