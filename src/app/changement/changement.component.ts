import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changement',
  templateUrl: './changement.component.html',
  styleUrls: ['./changement.component.scss']
})
export class ChangementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.counterAnimation(7154, 0.001, 10, this.data_dechets)
  }
  
  id : any = 0;
  data_dechets : number = 0;

  counterAnimation( destination: number, speed : number, step : number, value_to_change : number) {
    let tempo = 0;
    this.id = setInterval(() => {
      tempo = tempo + step;
      value_to_change = tempo;
      
       if(tempo === destination || tempo >= destination) {
        clearInterval(this.id);
       }

    }, speed);
  }
}