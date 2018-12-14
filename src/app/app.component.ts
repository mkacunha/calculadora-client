import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numeroUm: number = 2;
  numeroDois: number = 10;
  operacao: string = 'SOMA';

  response: any = {};

  constructor(private http: HttpClient){}

  onClickExecutarOperacao() {
    const calculo = {
      operacao: this.operacao,
      numeroUm: this.numeroUm,
      numeroDois: this.numeroDois
    };

    this
    .http
    .post('https://mkacunha-calculadora-api.herokuapp.com/api/calculos', calculo)
    .subscribe(response => this.response = response);
  }
}
