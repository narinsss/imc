import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Calculo } from 'model/calculos.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CalculosService {
  private listaCalculos: any[];
  private url = 'http://localhost:3000/calculos';

  constructor(private httpClient: HttpClient) {
    this.listaCalculos = [];
  }

  get calculos() {
    return this.listaCalculos;
  }

  todas(): Observable<Calculo[]>{
    return this.httpClient.get<Calculo[]>(this.url);
  }

  adicionar(calculo: Calculo): Observable<Calculo> {
    return this.httpClient.post<Calculo>(this.url, calculo);
  }
}
