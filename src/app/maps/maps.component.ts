import { DatePipe } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { CollecteService } from '../services/collecte.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements AfterViewInit, OnInit {

  private map: any;
  private nbr_collecte : number = 0 ;

  constructor(private collecteService : CollecteService) {    
  }

  ngOnInit(): void {

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


    this.collecteService.getListOfCollect().subscribe(data => {

      for (var val of data) {
        var lat_nbr: number = val.latitude as number;
        var lng_nbr: number = val.longitude as number;
  
       var marker = L.marker([lat_nbr, lng_nbr], {icon:
        this.getGPSIcon()}).addTo(this.map).openPopup();
        marker.bindPopup(this.generateDom(val))

        this.nbr_collecte ++;
      }
    });

    tiles.addTo(this.map);


  }
  ngAfterViewInit(): void {
    this.initMap(); 
  }

  generateDom(data : any) : string {
    const template = 
    "<div class=\"containeur-popup\"><div class=\"grid-containeur\"><div class=\"title\">"+ 
    data.beachName + "</div><div class=\"containeur-center\"><div class=\"items\">" +
    data.organisateur + "</div><div class=\"items\">" +
    this.formatDate(data.dateCollecte) + "</div></div><div class=\"button-containeur\"><div class=\"button-popup\">Particper</div></div></div></div>" ;
    return template;
  }

  formatDate(date : string) : string {
    var datePipe = new DatePipe("en-US");
    return "" + datePipe.transform(date, 'dd/MM/yyyy h:mm a');
  }

  getNumberOffCollecte() : number {
    return this.nbr_collecte;
  }

  getGPSIcon() {
    const GPSIcon = L.icon({
      iconUrl: '../assets/gps-marker-icon-4.jpg',
      iconSize: [40, 40]
    });
    return GPSIcon;
  }
}
