import { ModalInfoPage } from './../modal-info/modal-info.page';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modalcontroller: ModalController) { }

  ngOnInit() {
  }

  async abrirModal() {
    const modal = await this.modalcontroller.create({
      component: ModalInfoPage,
      componentProps: {
        nombre: 'Sergio',
        pais: 'Panama'
      }
    });

    await modal.present();

    // obtener los datos del modal hijo al modal padre
    // onDidDismiss: promesa que se escucha al cerrar el modal
    const { data } = await modal.onDidDismiss();
    console.log('retorno de modal-info', data);
  }
}
