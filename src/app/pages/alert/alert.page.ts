import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  public title = 'alert page';

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler: (blah) => {
          console.log('Boton Cancel');
        }
      }, {
        text: 'Okay',
        handler: () => {
          console.log('Ok boton');
        }
      }]
    });

    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Inputs', subHeader: 'Data', message: 'Formulario de contacto',
      inputs: [
        { name: 'nombre', type: 'text', placeholder: 'Introduzca nonmbre' }
      ],
      buttons: [{ text: 'Cancelar', role: 'cancel', handler: () => { console.log('Se cancelo'); } },
      { text: 'Aceptar', handler: (data) => { console.log('Se Acepto', data); this.title = data.nombre; } }
      ]
    });

    await alert.present();
  }

}
