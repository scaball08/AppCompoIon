import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from './../../interfaces/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  public componentes: Observable<Componente[]>;
  constructor(private menuController: MenuController, private dataService: DataService) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
  }

  toggleMenu() {
    this.menuController.toggle();
  }

}


