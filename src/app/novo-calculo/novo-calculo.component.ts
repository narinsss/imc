import { Calculo } from 'model/calculos.model';
import { CalculosService } from './../services/calculos.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-novo-calculo',
  templateUrl: './novo-calculo.component.html',
  styleUrls: ['./novo-calculo.component.css']
})
export class NovoCalculoComponent implements OnInit {

  @Output() aoCalcular = new EventEmitter<any>();

  nome: string;
  idade: number;
  peso: number;
  altura: number;
  imc: number;

  constructor(
    private service: CalculosService, private router: Router) { }

  ngOnInit(): void {
  }

  calcular(){
    const nome = this.nome;
    const idade = this.idade;
    const peso = this.peso;
    const altura = this.altura / 100;
    const imc = peso / (altura * altura);
    const result = imc.toFixed(1);

    const resultado: Calculo = {nome: nome, idade: idade, imc: result};

    this.service.adicionar(resultado).subscribe(resultado => {
      console.log(resultado);
      this.limparCampos();
      this.router.navigateByUrl('resultado');

    },
    (error) => console.error(error)
    );

    if(nome == '' || idade == null || altura == null || peso == null ){
      alert('Preencha todos os campos!')
    }else {
      this.aoCalcular.emit(resultado);
      this.limparCampos();
    }
  }

  limparCampos(){
    this.nome = '';
    this.idade = 0;
    this.altura = 0;
    this.peso = 0;
  }


}
