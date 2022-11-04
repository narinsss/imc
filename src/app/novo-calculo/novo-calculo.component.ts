import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-novo-calculo',
  templateUrl: './novo-calculo.component.html',
  styleUrls: ['./novo-calculo.component.css']
})
export class NovoCalculoComponent implements OnInit {

  @Output() aoCalcular = new EventEmitter<any>();

  peso: number;
  altura: number;
  imc: number;

  constructor() { }

  ngOnInit(): void {
  }

  calcular(){
    const peso = this.peso;
    const altura = this.altura / 100
    const imc = peso / (altura * altura);
    const result = imc.toFixed(1);
    const resultado = {imc: result};
    this.aoCalcular.emit(resultado);
    this.limparCampos();
  }

  limparCampos(){
    this.altura = 0;
    this.peso = 0;
  }
}
