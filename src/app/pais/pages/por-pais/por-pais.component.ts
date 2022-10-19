import { Component, Input } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { RespPasis } from '../../interfaces/paises.interfaces';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [],
})
export class PorPaisComponent {
  termino: string = '';
  hayError: boolean = false
  pais: RespPasis[] = [];

  constructor(private paisService:PaisService) {}

  buscar() {
    this.hayError = false
    console.log(this.termino);
    
    this.paisService.buscarPais(this.termino)
    .subscribe( (pais)  => {
      console.log(pais); 
      this.pais = pais


    },
    (err)=>{
      this.hayError = true;
      this.pais = [];
    }
    );
    this.termino = '';
  }
}
