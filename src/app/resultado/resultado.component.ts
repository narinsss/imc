import { CalculosService } from './../services/calculos.service';
import { NovoCalculoComponent } from './../novo-calculo/novo-calculo.component';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Calculo } from 'model/calculos.model';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  calculos: any[];

  constructor(
    private service: CalculosService
    ) { }

  ngOnInit(): void {
    this.service.todas().subscribe((calculos: Calculo[]) => {
      console.table(calculos);
      this.calculos = calculos;
    })
  }

}
