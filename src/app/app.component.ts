import { Component, OnInit } from '@angular/core';
import { latLng, Layer, MapOptions, tileLayer, marker } from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'ngx-leaflet-sidebar';
  options: MapOptions;
  layers: Layer[];

  ngOnInit() {
    this.options = {
      layers: [
        tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
      ],
      zoom: 5,
      center: latLng(46.879966, -121.726909)
    };
    this.layers = [
      marker([ 46.879966, -121.726909 ]).on('click', (event) => this.markerClick(event))
    ];
  }

  markerClick(event) {
    console.log('marker clicked', event);
  }
 
 
}
