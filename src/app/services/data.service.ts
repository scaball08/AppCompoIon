import { Componente } from './../interfaces/interfaces';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getMenuOpts() {

    return this.http.get<Componente[]>('./assets/data/menu.json');
  }

  getAlbumes() {

    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getHeroes() {

    return this.http.get<any[]>('./assets/data/superheroes.json').
      pipe(
        // usamos el delay(miliseg); para
        delay(2000)
      );
  }

}
