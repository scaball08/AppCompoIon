import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNaci: Date = new Date();
  customPickerOptions: any;
  customDate: Date;

  constructor() { }

  ngOnInit() {
    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: (evento) => {
          console.log('Clicked Save!');
          console.log(evento);
          this.customDate = new Date(evento.year.value, evento.month.value, evento.day.value);
          console.log(this.customDate);
        }
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    };
  }

  cambioFecha(event) {
    console.log(event);
    console.log(new Date(event.detail.value));
    console.log('fechaNaci', this.fechaNaci);
    console.log('ISO 8601 ', this.fechaNaci.toISOString());
    console.log('fechaNaci', this.fechaNaci);
  }

}
