import { Component, OnInit } from '@angular/core';
import { Collecte } from '../model/collecte.model';
import { CollecteService } from '../services/collecte.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-organiser',
  templateUrl: './organiser.component.html',
  styleUrls: ['./organiser.component.scss']
})
export class OrganiserComponent implements OnInit {

  newCollecte = new Collecte();
  private map: any;
  private marker : any;

  constructor(private collecteService : CollecteService) { }

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    
    this.map = L.map('map', {
      center: [ 48.862725, 2.287592 ],
      zoom: 5
    }); 

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 4,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

   this.map.on('click',  (e: { latlng: { lat: any; lng: any; }; }) => {
      this.newCollecte.latitude  = e.latlng.lat;
      this.newCollecte.longitude  = e.latlng.lng;

      if(this.marker !== undefined) {
        this.map.removeLayer(this.marker);
      }

       this.marker = L.marker([e.latlng.lat, e.latlng.lng], {icon:
        this.getGPSIcon()}).addTo(this.map).openPopup();
    });
  }

  addCollecte(){
    this.collecteService.addCollecte(this.newCollecte)
    .subscribe(prod => {
    console.log(prod);
    });
  }
    
  getGPSIcon() {
    const GPSIcon = L.icon({
      iconUrl: '../assets/gps-marker-icon-4.jpg',
      iconSize: [40, 40]
    });
    return GPSIcon;
  }

}
