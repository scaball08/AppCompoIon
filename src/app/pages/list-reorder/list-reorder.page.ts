import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes = ['Aquaman', 'Batman', 'Superman', 'Flash', 'Mujer Maravilla'];

  constructor() { }

  ngOnInit() {
  }

  reorder(event: any) {
    console.log(event);
    // Version 1 ELIMINAR la funcion splice(posicion_elemet_elimina,cantidad_a_elimi) : retorna un arreglo con el elemento a eliminar
    // escoger la posicion[0] que contiene el elemento a eliminar
    // version 2 INSERTAR la funcion splice(posicion_elemet_inserta,0,elements_inset) : retorna un arreglo con el elementos a insertar
    // escoger la posicion[0] que contiene el elemento a eliminar
    const itemMover = this.personajes.splice(event.detail.from, 1)[0];
    this.personajes.splice(event.detail.to, 0, itemMover);

    // funcion llamada al soltar el elemento
    event.detail.complete();
  }

  onClick() {
    console.log(this.personajes);
  }

}
