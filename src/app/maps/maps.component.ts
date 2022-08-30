import { DatePipe } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements AfterViewInit {

  private map: any;
  private nbr_collecte : number = 0 ;

  constructor(private server : ServerService) { }

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

    
    this.server.getJSON().subscribe(data => {
      for (var val of data) {
        var marker = L.marker([val.latitude, val.longitude]).addTo(this.map);
        marker.bindPopup(this.generateDom(val))
        tiles.addTo(this.map);

        this.nbr_collecte ++;
      }
    });
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
}
