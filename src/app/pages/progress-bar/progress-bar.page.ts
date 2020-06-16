import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.page.html',
  styleUrls: ['./progress-bar.page.scss'],
})
export class ProgressBarPage implements OnInit {

  porcentaje = 0.05;
  max = 400;
  min = 1;
  constructor() { }

  ngOnInit() {
  }

  cambioRango(evento) {
    console.log(evento);
    this.porcentaje = Number((evento.detail.value / this.max).toFixed(2));
  }

}
