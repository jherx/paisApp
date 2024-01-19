import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { RespPasis } from '../../interfaces/paises.interfaces';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [],
})
export class PorCapitalComponent {
  placeholder?: string = 'Buscar por Capital';
  termino: string = '';
  capital: RespPasis[] = [];

  hayError: boolean = false;
  isLoading: boolean = false;


  constructor(private PaisService: PaisService) {}

  buscar(termino: string) {
    this.hayError = false;
    this.isLoading = true
    this.termino = termino;
    console.log(this.termino);

    this.PaisService.buscarCapital(termino).subscribe(
      (capital) => {
        console.log(capital);
        this.capital = capital;
        this.isLoading = false
      },
      (err) => {
        this.hayError = true;
        this.capital = [];
      }
    );

    this.termino = '';
  }
}
