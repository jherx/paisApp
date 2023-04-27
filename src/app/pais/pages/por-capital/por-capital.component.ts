import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { RespPasis } from "../../interfaces/paises.interfaces";

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent  {

  termino: string = '';
  hayError: boolean = false
  capital: RespPasis[] = [];


  constructor(
    private PaisService: PaisService
  ) { }

buscar(termino:string){
  this.hayError = false
  this.termino = termino
  console.log(this.termino);

  this.PaisService.buscarCapital(termino).subscribe((capital)=>{
    console.log(capital);
    this.capital = capital    
  },
  (err) =>{
    this.hayError = true;
    this.capital = []
  });

  this.termino = '';
  
}

sugerencia(termino:string){
  this.hayError = false
}

}
