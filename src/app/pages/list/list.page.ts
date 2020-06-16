import { DataService } from './../../services/data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('lista', { static: false }) lista: IonList;
  usuarios: Observable<any>;
  constructor(private dataService: DataService, private toastController: ToastController) { }

  ngOnInit() {
    this.usuarios = this.dataService.getUser();
  }

  ionic(user) {
    this.presentToast(' se activo ionic');
    console.log('ionic', user);
    this.lista.closeSlidingItems();
  }

  github(user) {
    this.presentToast(' se activo github');
    console.log('github', user);
    this.lista.closeSlidingItems();
  }
  react(user) {
    this.presentToast(' se activo react');
    console.log('react', user);
    this.lista.closeSlidingItems();
  }
  angular(user) {
    this.presentToast(' se activo angular');
    console.log('angular', user);
    this.lista.closeSlidingItems();
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

}
