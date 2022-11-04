import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'imc';
  calculo: any;

  calcular($event: any) {
    console.log($event);
    this.calculo = $event;
  }
}
