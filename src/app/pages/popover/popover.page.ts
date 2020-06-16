import { PopinfoComponent } from './../../components/popinfo/popinfo.component';
import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {
  }

  async mostrarPop(evento) {
    const popover = await this.popoverController.create({
      component: PopinfoComponent,
      event: evento, // componente que lo aciona
      mode: 'ios', // que siempre tenga el pop de ios
      backdropDismiss: false // que ejecute una accion en el pop para poder cerrarlo

    });

    await popover.present();

    // recibir los datos del pop hijo
    // 1. cuando se ha cerrado el popo
    // const { data } = await popover.onDidDismiss();
    // 1. mientras se esta cerrando el popo
    const { data } = await popover.onWillDismiss();

    console.log('Padre', data);
  }

}
