import { CalculosService } from './services/calculos.service';
import { ResultadoComponent } from './resultado/resultado.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'imc';
  calculos: any[] = [];

  constructor(
    private service: CalculosService
  ){}

  calcular($event: any) {
    this.service.adicionar($event);
  }

}
