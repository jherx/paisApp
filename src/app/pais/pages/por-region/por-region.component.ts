import { Component } from '@angular/core';
import { RespPasis} from '../../interfaces/paises.interfaces'
import { PaisService } from '../../services/pais.service';

type Region = 'Africa' |'America' |'Asia' |'Europe' |'Oceania'

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
 
    
    `
  ]
})
export class PorRegionComponent  {

  regiones: Region[] = ['Africa','America','Asia','Europe','Oceania'];
  selectedRegion?: Region
  termino: string = '';
  hayError: boolean = false;
  region: RespPasis[] = [];

  constructor(
    private PaisService: PaisService
  ) { }

    buscar(termino:Region){

      this.selectedRegion = termino
      this.hayError = false
      this.PaisService.buscarRegion(termino).subscribe((region)=>{
        this.region = region
      },
      (err) =>{
        this.hayError = true
      });
      this.termino = ''
    }
}
