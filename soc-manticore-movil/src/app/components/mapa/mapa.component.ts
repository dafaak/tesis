import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';

declare var mapboxgl: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent implements OnInit, AfterViewInit {

  @ViewChild('mapa') mapa;


  @Input()
  longitudVendedor: number;

  @Input()
  latitudVendedor: number

  constructor() {
  }

  ngOnInit() {
  }


  ngAfterViewInit() {

    mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kZXJzb25yZXYiLCJhIjoiY2tzMjVrczdvMGVxdzJucGsycHpjNGYybSJ9.69SGPABVoQ3v0ZGc30FDlQ';
    const map = new mapboxgl.Map({
      container: this.mapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.longitudVendedor, this.latitudVendedor],
      zoom: 15,
      antialias: true
    });

    map.on('load', () => {
      map.resize();

      const marker1 = new mapboxgl.Marker()
        .setLngLat([this.longitudVendedor, this.latitudVendedor])
        .addTo(map);


      // Insert the layer beneath any symbol layer.
      const layers = map.getStyle().layers;
      const labelLayerId = layers.find(
        (layer) => layer.type === 'symbol' && layer.layout['text-field']
      ).id;


      map.addLayer(
        {
          'id': 'add-3d-buildings',
          'source': 'composite',
          'source-layer': 'building',
          'filter': ['==', 'extrude', 'true'],
          'type': 'fill-extrusion',
          'minzoom': 15,
          'paint': {
            'fill-extrusion-color': '#aaa',

            // Use an 'interpolate' expression to
            // add a smooth transition effect to
            // the buildings as the user zooms in.
            'fill-extrusion-height': [
              'interpolate',
              ['linear'],
              ['zoom'],
              15,
              0,
              15.05,
              ['get', 'height']
            ],
            'fill-extrusion-base': [
              'interpolate',
              ['linear'],
              ['zoom'],
              15,
              0,
              15.05,
              ['get', 'min_height']
            ],
            'fill-extrusion-opacity': 0.6
          }
        },
        labelLayerId
      );
    })
  }


}
